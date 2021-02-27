const mysql = require("mysql");
const express = require("express");
const formidable = require("express-formidable");
const web = require("./routes/web");
const api = require("./routes/api");
const db = require("./config/db");
const cors = require("cors");
const server = express();
const PORT = 8000;

// Accès aux images
server.use(express.static('storage'));

// connection to database
const connect_to_db = (connection) => {
  connection.connect((error) => {
    if (error) {
      console.log(error);
    }
      console.log("La connexion à la base de données est établie");
  });
};

const connection = mysql.createConnection(db.params);
connect_to_db(connection);
// form parse
server.use(formidable());
// cors allow origine
server.use(cors());
// webs server routes
web.web(server, connection);
// api server routes
api.api(server, connection);

server.listen(PORT, () => {
  console.log(`Le serveur écoute sur http://127.0.0.1:${PORT}`);
});