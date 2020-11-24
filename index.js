const dotenv = require('dotenv');
const express = require('express');
dotenv.config();

const PORT = process.env.DATABASE_PORT || 1234;
const router = require('./app/router');

const app = express();

app.set('views enjine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

app.use(router);

app.listen(PORT, () => {
    console.log(`Listening eon port ${PORT}`)
}) 