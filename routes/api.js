const apprenantController = require("../controlers/apprenant_controler");
const promotionController = require("../controlers/promotion_cohorte_controler");
const competenceController = require("../controlers/competence_controler");
const userController = require("../controlers/user_controler");

const api = (server, db) => {
  
  // apprenants
  server.route("/api/apprenant")
    .get((req, res) => {
      apprenantController.get(db, req, res);
    })
    .post((req, res) => {
      apprenantController.post(db, req, res);
    })
    .put((req, res) => {
      apprenantController.put(db, req, res);
    })
    .delete((req, res) => {
      apprenantController.delete(db, req, res);
    });

 //users
 server.route("/api/user")
 .get((req, res) => {
    userController.get(db, req, res);
  });
 
//promotion
 server.route("/api/promotion")
 .get((req, res) => {
    promotionController.get(db, req, res);
  });

//comptence
 server.route("/api/competence")
 .get((req, res) => {
    competenceController.get(db, req, res);
  });

server.route("/api/competence/apprenant")
.get((req, res) => {
    competenceController.get_apprenant(db, req, res);
  });

    
};

exports.api=api;