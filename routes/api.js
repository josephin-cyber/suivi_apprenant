const apprenantController = require("../controlers/apprenant_controler");
const apprenantCompetenceController = require("../controlers/apprenant_competence_controller");
const promotionController = require("../controlers/promotion_controler");
const competenceController = require("../controlers/competence_controler");
const userController = require("../controlers/user_controler");
const loginController = require("../controlers/login_controller");
const authenticateJWT = require("../config/jwt");

const api = (server, db) => {
  //login
  server.route("/api/login").get((req, res) => {
    loginController.get(db, req, res);
  });

  // apprenants
  server
    .route("/api/apprenant")
    .get(authenticateJWT.authenticateJWT, (req, res) => {
      apprenantController.get(db, req, res);
    })
    .post(authenticateJWT.authenticateJWT, (req, res) => {
      apprenantController.post(db, req, res);
    })
    .put(authenticateJWT.authenticateJWT, (req, res) => {
      apprenantController.put(db, req, res);
    })
    .delete(authenticateJWT.authenticateJWT, (req, res) => {
      apprenantController.drop(db, req, res);
    });

  // apprenant/competence
  server
    .route("/api/apprenant/competence")
    .post(authenticateJWT.authenticateJWT, (req, res) => {
      apprenantCompetenceController.post(db, req, res);
    })
    .put(authenticateJWT.authenticateJWT, (req, res) => {
      apprenantCompetenceController.put(db, req, res);
    })
    .delete(authenticateJWT.authenticateJWT, (req, res) => {
      apprenantCompetenceController.drop(db, req, res);
    });

  //users
  server
    .route("/api/user")
    .get(authenticateJWT.authenticateJWT, (req, res) => {
      userController.get(db, req, res);
    })
    .post(authenticateJWT.authenticateJWT, (req, res) => {
      userController.post(db, req, res);
    })
    .put(authenticateJWT.authenticateJWT, (req, res) => {
      userController.put(db, req, res);
    })
    .delete(authenticateJWT.authenticateJWT, (req, res) => {
      userController.drop(db, req, res);
    });

  //promotion
  server
    .route("/api/promotion")
    .get(authenticateJWT.authenticateJWT, (req, res) => {
      promotionController.get(db, req, res);
    })
    .post(authenticateJWT.authenticateJWT, (req, res) => {
      promotionController.get(db, req, res);
    })
    .put(authenticateJWT.authenticateJWT, (req, res) => {
      promotionController.get(db, req, res);
    })
    .delete(authenticateJWT.authenticateJWT, (req, res) => {
      promotionController.get(db, req, res);
    });

  //comptence
  server
    .route("/api/competence")
    .get(authenticateJWT.authenticateJWT, (req, res) => {
      competenceController.get(db, req, res);
    })
    .post(authenticateJWT.authenticateJWT, (req, res) => {
      competenceController.post(db, req, res);
    })
    .put(authenticateJWT.authenticateJWT, (req, res) => {
      competenceController.put(db, req, res);
    })
    .delete(authenticateJWT.authenticateJWT, (req, res) => {
      competenceController.drop(db, req, res);
    });
};

exports.api = api;
