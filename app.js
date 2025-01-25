const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mailer = require('./controler/mailer'); // Path to mailer.js

// Initialize dotenv to read .env variables
dotenv.config();

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (for CSS, JS, images, etc.)
app.use(express.static('public'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/mail', mailer);

app.get('/', (req, res) => {
    res.render('form');
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});