// const express = require('express');
// const router = express.Router();
// const nodemailer = require("nodemailer");

// const sendMail = async () => {
//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'your-email@gmail.com',
//             pass: 'your-password'
//         }
//     });

//     let mailOptions = {
//         from: 'your-email@gmail.com',
//         to: 'recipient@example.com',
//         subject: 'Test Email',
//         text: 'This is a test email sent using Node.js and Nodemailer!'
//     };

//     try {
//         let info = await transporter.sendMail(mailOptions);
//         console.log('Email sent:', info.response);
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// };


// router.get("/", (req, res) => {
//     res.send("this mailer from manish ");
// })


// module.exports = router;
