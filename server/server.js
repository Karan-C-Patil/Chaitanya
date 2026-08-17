import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import xlsx from 'xlsx';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'chaitanya_education'
};

let db;

async function connectToDatabase() {
  try {
    db = await mysql.createConnection(dbConfig);
    console.log('Connected to MySQL database');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', database: db ? 'connected' : 'disconnected' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { inquiryType, name, email, phone, grade, message } = req.body;

    // Validate required fields
    if (!inquiryType || !name || !phone || !grade) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Save to database
    const query = `
      INSERT INTO contact_submissions (inquiry_type, name, email, phone, grade, message)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    
    await db.execute(query, [inquiryType, name, email, phone, grade, message]);

    // Get all submissions for Excel
    const [submissions] = await db.execute('SELECT * FROM contact_submissions ORDER BY created_at DESC');
    
    // Create Excel file
    const worksheet = xlsx.utils.json_to_sheet(submissions);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Contact Submissions');
    const excelBuffer = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    // Send email with Excel attachment
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'chaitnyaschool97@gmail.com',
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
        <p><em>This email was sent from Chaitanya Education Institute contact form.</em></p>
      `,
      attachments: [{
        filename: `contact_submissions_${new Date().toISOString().split('T')[0]}.xlsx`,
        content: excelBuffer,
        contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      }]
    };

    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Form submitted successfully and email sent!' 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error processing form submission' 
    });
  }
});

app.get('/api/submissions', async (req, res) => {
  try {
    const [submissions] = await db.execute('SELECT * FROM contact_submissions ORDER BY created_at DESC');
    res.json({ success: true, data: submissions });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({ success: false, message: 'Error fetching submissions' });
  }
});

// Start server
async function startServer() {
  await connectToDatabase();
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('API endpoints:');
    console.log('  POST /api/contact - Submit contact form');
    console.log('  GET  /api/submissions - Get all submissions');
    console.log('  GET  /api/health - Health check');
  });
}

startServer().catch(console.error);
