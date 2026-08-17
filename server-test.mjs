// ES module server test for VS Code
console.log('Starting server test...');
console.log('Node.js version:', process.version);
console.log('Current directory:', process.cwd());

try {
  // Test dotenv loading first
  console.log('Testing dotenv...');
  const dotenv = await import('dotenv');
  dotenv.config();
  console.log('✅ Dotenv configured');
  
  console.log('Environment variables:', {
    NODE_ENV: process.env.NODE_ENV,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    EMAIL_USER: process.env.EMAIL_USER
  });
  
  // Test basic imports
  console.log('Testing imports...');
  const express = await import('express');
  console.log('✅ Express imported successfully');
  
  const mysql = await import('mysql2');
  console.log('✅ MySQL2 imported successfully');
  
  const nodemailer = await import('nodemailer');
  console.log('✅ Nodemailer imported successfully');
  
  console.log('All imports successful - server should work!');
  
} catch (error) {
  console.error('❌ Import error:', error.message);
  process.exit(1);
}
