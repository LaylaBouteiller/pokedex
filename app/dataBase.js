// 1. require le module
var mysql = require('mysql');

// 2. Créer un client
const connection = mysql.createConnection({
  host: process.env.DATABASE_URL,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});

// 3. Connecter le client
connection.connect();

// 4. Exporter le client connecté
module.exports = connection; 