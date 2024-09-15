// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const transporter = require('../config/mail');
const { body, validationResult } = require('express-validator');
const { parse } = require('date-fns');
const { zonedTimeToUtc } = require('date-fns-tz');

router.post(
  '/',
  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('date').notEmpty(),
    body('time').notEmpty(),
  ],
  async (req, res) => {
    const { name, email, date, time } = req.body;

    // Existing validation logic...

    try {
      console.log('Attempting to save booking to database...');
      // Save the booking to the database
      const booking = new Booking({ name, email, date, time });
      await booking.save();
      console.log('Booking saved to database.');

      console.log('Attempting to send confirmation emails...');
      // Send email to patient
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Appointment Confirmation',
        text: `Dear ${name},\n\nYour appointment is confirmed for ${date} at ${time}.\n\nThank you,\nAdvance Dental Clinic`,
      });
      console.log('Confirmation email sent to patient.');

      // Send email to doctor
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.DOCTOR_EMAIL,
        subject: 'New Appointment Booking',
        text: `New appointment booked by ${name} on ${date} at ${time}.\n\nContact: ${email}`,
      });
      console.log('Notification email sent to doctor.');

      res.status(200).json('Appointment booked successfully.');
    } catch (error) {
      console.error('Error during booking process:', error);
      res.status(500).json('Server error.');
    }
  }
);

module.exports = router;
