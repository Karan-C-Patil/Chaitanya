import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'chaitanya_education'
};

async function getConnection() {
  return await mysql.createConnection(dbConfig);
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const conn = await getConnection();
    try {
      const [submissions] = await conn.execute('SELECT * FROM contact_submissions ORDER BY created_at DESC');
      return res.status(200).json({ success: true, data: submissions });
    } finally {
      await conn.end();
    }
  } catch (error) {
    console.error('Error in /api/submissions:', error);
    return res.status(500).json({ success: false, message: 'Error fetching submissions' });
  }
}
