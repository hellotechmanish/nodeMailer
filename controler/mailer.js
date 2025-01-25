const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// Setup transport using Gmail SMTP details
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,  // Your Gmail email address
        pass: process.env.EMAIL_PASS,  // Your Gmail App Password (generated from 2-Step Verification)
    }
});


router.post('/', async (req, res) => {
    console.log("Request Body:", req.body); // Add this line for debugging

    const { to, subject, text } = req.body;

    if (!to || !subject || !text) {
        return res.status(400).json({ status: 'error', message: 'Missing required fields: to, subject, or text.' });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({
            status: 'success',
            message: `Email sent: ${info.response}`
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

module.exports = router;
