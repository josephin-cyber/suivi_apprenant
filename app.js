const db=require("./config/db");
const express=require("express");
const mysql=require("mysql");
const apprenant=require("./controlers/apprenant_controler")
const user=require("./controlers/user_controler")


const PORT = 8000;
const server = express();
const connection = mysql.createConnection(db.db);

//Connexion à la base de données
connection.connect((erreur) => {
  if (erreur) {
    throw erreur;
  }
  console.log('La connexion à la base de données est établie');
});


// Aprenants
server.get('/apprenants', (req, res)=>{
  apprenant.get(connection, req, res);
});

server.post('/apprenants', (req, res)=>{
  apprenant.post(connection, req, res);
});

server.put('/apprenants', (req, res)=>{
  apprenant.put(connection, req, res);
});

server.delete('/apprenants', (req, res)=>{
  apprenant.delete(connection, req, res);
});

// User
server.get('/user', (req, res)=>{
  user.get(connection, req, res);
});

server.post('/user', (req, res)=>{
  user.post(connection, req, res);
});

server.put('/user', (req, res)=>{
  user.put(connection, req, res);
});

server.delete('/user', (req, res)=>{
  user.delete(connection, req, res);
});

server.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port ${PORT}`);
});