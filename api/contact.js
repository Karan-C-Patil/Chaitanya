const MAX_INPUT_LENGTHS = {
  inquiryType: 100,
  name: 200,
  email: 255,
  phone: 30,
  grade: 100,
  message: 2000,
};

const sanitize = (value) => {
  if (value === undefined || value === null) return '';
  return String(value).trim().replace(/\s+/g, ' ');
};

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');
const validatePhone = (phone) => /^\+?[0-9\s-]{7,20}$/.test(phone || '');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const body = req.body || {};
    const inquiryType = sanitize(body.inquiryType || body.inquiry_type);
    const name = sanitize(body.name);
    const email = sanitize(body.email || '');
    const phone = sanitize(body.phone);
    const grade = sanitize(body.grade || body.class || '');
    const message = sanitize(body.message || '');

    if (!inquiryType || !name || !phone || !grade) {
      return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
    }

    for (const [key, value] of Object.entries({ inquiryType, name, email, phone, grade, message })) {
      const max = MAX_INPUT_LENGTHS[key] || 2000;
      if (value.length > max) {
        return res.status(400).json({ success: false, message: `${key} is too long.` });
      }
    }

    if (email && !validateEmail(email)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
    }

    if (!validatePhone(phone)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid phone number.' });
    }

    const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    const secret = process.env.GOOGLE_APPS_SCRIPT_SECRET;

    if (!appsScriptUrl) {
      console.error('Missing GOOGLE_APPS_SCRIPT_URL env var');
      return res.status(500).json({ success: false, message: 'The contact service is not configured yet.' });
    }

    const payload = {
      inquiryType,
      name,
      email,
      phone,
      grade,
      message,
      schoolEmail: process.env.SCHOOL_EMAIL || 'school@example.com',
      secret,
    };

    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.success === false) {
      console.error('Google Apps Script failure:', result);
      return res.status(500).json({
        success: false,
        message: 'Sorry, we could not submit your enquiry right now. Please try again later.',
      });
    }

    return res.status(200).json({ success: true, message: 'Enquiry submitted successfully' });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return res.status(500).json({
      success: false,
      message: 'Sorry, we could not submit your enquiry right now. Please try again later.',
    });
  }
}
