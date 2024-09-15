require('dotenv').config();
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail', 'Yahoo', 'Outlook', etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email address (from .env file)
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password (from .env file)
  },
});

module.exports = transporter;
