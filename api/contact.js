import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';
import xlsx from 'xlsx';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'chaitanya_education',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  let connection;

  try {
    const { inquiryType, name, email, phone, grade, message } = req.body || {};

    if (!inquiryType || !name || !phone || !grade) {
      return res.status(400).json({ success: false, message: 'Please fill in all required fields' });
    }

    connection = await mysql.createConnection(dbConfig);

    const query = `
      INSERT INTO contact_submissions (inquiry_type, name, email, phone, grade, message)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    await connection.execute(query, [inquiryType, name, email, phone, grade, message]);

    const [submissions] = await connection.execute('SELECT * FROM contact_submissions ORDER BY created_at DESC');

    const worksheet = xlsx.utils.json_to_sheet(submissions);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Contact Submissions');
    const excelBuffer = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFY_EMAIL || process.env.EMAIL_USER,
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
      attachments: [{
        filename: `contact_submissions_${new Date().toISOString().split('T')[0]}.xlsx`,
        content: excelBuffer,
        contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      }],
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return res.status(500).json({ success: false, message: 'Error processing form submission' });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
