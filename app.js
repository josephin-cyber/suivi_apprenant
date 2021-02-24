const db=require("./config/db");
const express=require("express");
const mysql=require("mysql");
const apprenant=require("./controlers/apprenant_controler");
const promotion=require("./controlers/promotion_cohorte_controler");
const comptence=require("./controlers/competence_controler");
const user=require("./controlers/user_controler")
const formidable = require('express-formidable');
var cors = require('cors')

const PORT = 8000;
const server = express();
const connection = mysql.createConnection(db.db);

server.use(formidable());
server.use(cors());

connection.connect((erreur) => {
  if (erreur) {
    throw erreur;
  }
  console.log('La connexion à la base de données est établie');
});
                                                                                                                                                                                                       
server.get('/', (req, res)=>{
  res.send("Le serveur écoute sur http://127.0.0.1:8000");
});


// Aprenants
server.get('/apprenants', (req, res)=>{
  apprenant.get(connection, req, res);
});

server.post('/apprenants', (req, res)=>{
  apprenant.post(connection, req, res);
});

server.put('/apprenants/:id', (req, res)=>{
  apprenant.put(connection, req, res);
});

server.delete('/apprenants/:id', (req, res)=>{
  apprenant.delete(connection, req, res);
});

// User
server.get('/user', (req, res)=>{
  user.get(connection, req, res);
});

//promotion
server.get('/promotion', (req, res)=>{
  promotion.get(connection, req, res);
});

//comptence
server.get('/competence', (req, res)=>{
  comptence.get(connection, req, res);
});

// server.post('/user', (req, res)=>{
//   user.post(connection, req, res);
// });

// server.put('/user', (req, res)=>{
//   user.put(connection, req, res);
// });

// server.delete('/user', (req, res)=>{
//   user.delete(connection, req, res);
// });

server.listen(PORT, () => {
  console.log(`Le serveur écoute sur http://127.0.0.1:${PORT}`);
});