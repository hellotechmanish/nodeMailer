const express = require('express');
const app = express();
const mailer = require('./controler/mailer');

app.use('/mail', mailer);

app.get('/', (req, res) => {
    res.send('Hello,manish');
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
