// Simple server test to diagnose VS Code issues
console.log('Starting server test...');
console.log('Node.js version:', process.version);
console.log('Current directory:', process.cwd());
console.log('Environment variables:', {
  NODE_ENV: process.env.NODE_ENV,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  EMAIL_USER: process.env.EMAIL_USER
});

try {
  // Test basic imports
  console.log('Testing imports...');
  const express = require('express');
  console.log('✅ Express imported successfully');
  
  const mysql = require('mysql2');
  console.log('✅ MySQL2 imported successfully');
  
  const nodemailer = require('nodemailer');
  console.log('✅ Nodemailer imported successfully');
  
  const dotenv = require('dotenv');
  console.log('✅ Dotenv imported successfully');
  
  // Test dotenv loading
  dotenv.config();
  console.log('✅ Dotenv configured');
  
  console.log('All imports successful - server should work!');
  
} catch (error) {
  console.error('❌ Import error:', error.message);
  process.exit(1);
}
