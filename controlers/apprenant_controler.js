const fs = require("fs");
const apprenantCompetenceController = require("../controlers/apprenant_competence_controller");

const get = (connection, req, res) => {
  connection.query(
    `SELECT * FROM apprenant INNER JOIN apprenant_competence ON apprenant_competence.id_apprenant=apprenant.id_apprenant
    INNER JOIN promotion ON promotion.id_promotion=apprenant.id_promotion
    INNER JOIN competence ON apprenant_competence.id_competence=competence.id_competence`,
    (error, data) => {
      if (error) return res.json({ error });
      return res.json({ data });
    }
  );
};

function uploadImage(image, file) {
  let photo = "";
  try {
    var data = image.replace(/^data:image\/\w+;base64,/, "");
    let buff = new Buffer.from(data, "base64");
    let name_file = file.name.split(".");
    let type = name_file[name_file.length - 1];
    let url = `${Date.now().toString()}-${file.lastModified}.${type}`;
    fs.writeFileSync("storage/"+url, buff);
    photo = url;
  } catch (err) {
    console.error(err);
  }
  return photo;
}

const post = (connection, req, res) => {
  let photo = "";
  if (!req.fields.image_name)
    photo = uploadImage(req.fields.image, req.fields.file);
  else photo = req.fields.image_name;

  connection.query(
    `INSERT INTO apprenant (photo_apprenant, nom_apprenant, postnom_apprenant,prenom_apprenant, sex_apprenant, adresse_apprenant, email_apprenant,tel_apprenant, date_naissance, id_promotion) VALUES ('${photo}','${req.fields.nom}', '${req.fields.post_nom}', '${req.fields.prenom}', '${req.fields.sex}', '${req.fields.adress}', '${req.fields.email}', '${req.fields.tel}', '${req.fields.date}', ${req.fields.id_promotion})`,
    (error, data) => {
      if (error) return res.status(500).json({ error });
      if(req.fields.competences.length > 0){
        req.fields.id_apprenant=data.insertId;
        return apprenantCompetenceController.post(connection, req, res);
      } 
      return res.status(200).json({ data });
    }
  );
};

const put = (connection, req, res) => {
  connection.query(`UPDATE apprenant SET photo_apprenant='${req.fields.photo}', nom_apprenant='${req.fields.nom}', postnom_apprenant='${req.fields.post_nom}',prenom_apprenant='${req.fields.prenom}', sex_apprenant='${req.fields.sex}',adresse_apprenant='${req.fields.adress}', email_apprenant='${req.fields.email}', tel_apprenant='${req.fields.tel}', date_naissance='${req.fields.date}', niveau_id='${req.fields.niveau_id}', id_promotion=${req.fields.id_promotion} WHERE id_apprenant = ${req.params.id}`,
    (error, data) => {
      if (error) return res.json({ error });
      return res.json({ data });
    }
  );
};

const drop = (connection, req, res) => {
  connection.query(
    `DELETE FROM apprenant WHERE id_apprenant=${req.params.id}`,
    (error, data) => {
      if (error) return res.json({ error });
      return res.json({ data });
    }
  );
};

exports.get = get;
exports.post = post;
exports.put = put;
exports.drop = drop;