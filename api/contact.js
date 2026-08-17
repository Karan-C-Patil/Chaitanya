import { createClient } from '@supabase/supabase-js';
import sgMail from '@sendgrid/mail';
import xlsx from 'xlsx';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { inquiryType, name, email, phone, grade, message } = req.body || {};

    if (!inquiryType || !name || !phone || !grade) {
      return res.status(400).json({ success: false, message: 'Please fill in all required fields' });
    }

    // Insert into Supabase
    const insertRes = await supabase.from('contact_submissions').insert([{ inquiry_type: inquiryType, name, email, phone, grade, message }]);
    if (insertRes.error) throw insertRes.error;

    // Fetch latest submissions
    const { data: submissions, error: fetchErr } = await supabase.from('contact_submissions').select('*').order('created_at', { ascending: false });
    if (fetchErr) throw fetchErr;

    // Create Excel buffer in memory
    const worksheet = xlsx.utils.json_to_sheet(submissions || []);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Contact Submissions');
    const excelBuffer = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    // Send email with SendGrid
    const to = process.env.NOTIFY_EMAIL || process.env.SENDGRID_FROM || process.env.EMAIL_USER;
    const from = process.env.SENDGRID_FROM || process.env.EMAIL_USER;
    const msg = {
      to,
      from,
      subject: `New Contact Form Submission: ${inquiryType} - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
        <hr>
        <p><em>Sent from Chaitanya Education contact form.</em></p>
      `,
      attachments: [
        {
          content: excelBuffer.toString('base64'),
          filename: `contact_submissions_${new Date().toISOString().split('T')[0]}.xlsx`,
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          disposition: 'attachment'
        }
      ]
    };

    if (!process.env.SENDGRID_API_KEY) {
      console.warn('SENDGRID_API_KEY not set; skipping email send');
    } else {
        // Send with retries for rate limits / transient errors
        const sendWithRetry = async (message, maxAttempts = 3) => {
          let attempt = 0;
          while (attempt < maxAttempts) {
            try {
              await sgMail.send(message);
              return;
            } catch (e) {
              attempt++;
              const status = e?.code || e?.response?.statusCode || e?.statusCode || e?.status;
              const isRateLimit = status === 429;
              const isServerError = status >= 500;
              if (attempt >= maxAttempts || (!isRateLimit && !isServerError)) {
                // not retryable or exhausted
                throw e;
              }
              const delay = Math.pow(2, attempt) * 250; // exponential backoff: 500, 1000, ...
              console.warn(`SendGrid send failed (attempt ${attempt}), retrying in ${delay}ms`, e?.message || e);
              await new Promise((r) => setTimeout(r, delay));
            }
          }
        };

        await sendWithRetry(msg, 3);
    }

    return res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return res.status(500).json({ success: false, message: 'Error processing form submission' });
  }
}
