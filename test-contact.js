import fetch from 'node-fetch';

const testData = {
  inquiryType: 'Admission Inquiry',
  name: 'Test User',
  email: 'test@example.com',
  phone: '1234567890',
  grade: 'LKG to 3rd Grade',
  message: 'This is a test message to verify the contact form functionality.'
};

async function testContactForm() {
  try {
    console.log('Testing contact form submission...');
    
    const API_BASE = process.env.API_BASE || 'http://localhost:5000';
    const response = await fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    
    console.log('Response status:', response.status);
    console.log('Response result:', result);
    
    if (result.success) {
      console.log('✅ Contact form test passed!');
      console.log('📧 Check itachi162425@gmail.com for the email with Excel attachment');
    } else {
      console.log('❌ Contact form test failed:', result.message);
    }
    
  } catch (error) {
    console.error('❌ Test failed with error:', error.message);
  }
}

testContactForm();
