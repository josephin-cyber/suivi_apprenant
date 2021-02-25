const apprenant = require("../controlers/apprenant_controler");
const promotion = require("../controlers/promotion_cohorte_controler");
const comptence = require("../controlers/competence_controler");
const user = require("../controlers/user_controler");

const api = (server, db) => {
  
  // apprenants
  server.route("/api/apprenant")
    .get((req, res) => {
      apprenant.get(db, req, res);
    })
    .post((req, res) => {
      apprenant.post(db, req, res);
    })
    .put((req, res) => {
      apprenant.put(db, req, res);
    })
    .delete((req, res) => {
      apprenant.delete(db, req, res);
    });

 //users
 server.route("/api/user")
 .get((req, res) => {
    user.get(connection, req, res);
  });
 
//promotion
 server.route("/api/promotion")
 .get((req, res) => {
    promotion.get(connection, req, res);
  });

//comptence
 server.route("/api/comptence")
 .get((req, res) => {
    comptence.get(connection, req, res);
  });

    
};

exports.api=api;