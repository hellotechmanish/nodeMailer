const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Setup transport using Gmail SMTP details
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mk772542@gmail.com',  // Your Gmail email address
        pass: 'amij egjf tpzy omik'      // Your Gmail app password (generated from 2-Step Verification)
    }
});

// Define POST route to handle email sending
router.post('/', async (req, res) => {
    console.log(req.body);
    const { to, subject, text } = req.body;

    if (!to || !subject || !text) {
        return res.status(400).json({ status: 'error', message: 'Missing required fields: to, subject, or text.' });
    }

    const mailOptions = {
        from: 'mk772542@gmail.com',  // Your Gmail address
        to,  // Recipient email address from the request
        subject,  // Subject of the email
        text,  // Body of the email
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({
            status: 'successfull send Email',
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
