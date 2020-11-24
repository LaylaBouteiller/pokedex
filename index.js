//require dotenv
const dotenv = require('dotenv');
const express = require('express');
//chargé les variables d'environnement
dotenv.config();
//ecoute sur port : variable environnement
const PORT = process.env.PORT || 1234;
//appel du router
const router = require('./app/router');

const app = express();
//gestion ejs views et static
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
//utilisation du router
app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})