// const multer = require("multer");
// const path = require("path");
const fs = require("fs");
//const decodeBase64Image=require("decodeBase64Image");

const get = (connection, req, res) => {
  connection.query(
    `SELECT * FROM apprenant
    INNER JOIN apprenant_competence ON apprenant_competence.id_apprenant=apprenant.id_apprenant
    INNER JOIN promotion_cohorte ON promotion_cohorte.id_promotion_cohorte=apprenant.id_promotion_cohorte
    INNER JOIN competence ON apprenant_competence.id_competence=competence.id_competence
    INNER JOIN promotion ON promotion.id_promotion=promotion_cohorte.id_promotion`,
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
    `INSERT INTO apprenant (photo_apprenant, nom_apprenant, postnom_apprenant,prenom_apprenant, sex_apprenant, adresse_apprenant, email_apprenant,tel_apprenant, date_naissance, niveau_detude, id_promotion_cohorte) VALUES ('${photo}','${req.fields.nom}', '${req.fields.post_nom}', '${req.fields.prenom}', '${req.fields.sex}', '${req.fields.adress}', '${req.fields.email}', '${req.fields.tel}', '${req.fields.date}', '${req.fields.niveau}', ${req.fields.id_promotion_cohorte})`,
    (error, data) => {
      if (error) {
        return res.status(500).json({ error });
      } else {
        if (req.fields.competences.length > 0) {
          req.fields.competences.map((item) => {
            connection.query(
              `INSERT INTO apprenant_competence (id_apprenant, id_competence) VALUES ('${data.insertId}', '${item.value}')`,
              (err, result) => {
                if (err) return console.log(err);
              }
            );
          });
        }
        return res.status(200).json({ data });
      }
    }
  );
};

const put = (connection, req, res) => {
  connection.query(
    `UPDATE apprenant SET photo_apprenant='${req.fields.photo}', nom_apprenant='${req.fields.nom}', postnom_apprenant='${req.fields.post_nom}',prenom_apprenant='${req.fields.prenom}', sex_apprenant='${req.fields.sex}',adresse_apprenant='${req.fields.adress}', email_apprenant='${req.fields.email}', tel_apprenant='${req.fields.tel}', date_naissance='${req.fields.date}', niveau_detude='${req.fields.niveau}', id_promotion_cohorte=${req.fields.id_promotion_cohorte} WHERE id_apprenant = ${req.params.id}`,
    (error, data) => {
      if (error) return res.json({ error });
      return res.json({ data });
    }
  );
};

// const find = (connection, req, res) => {
//   connection.query(
//     `SELECT * FROM ${table} WHERE id_apprenant=${req.params.payload} OR nom_apprenant LIKE %'${req.params.payload}'%`,
//     (error, data) => {
//       if (error) return res.json({ error });
//       return res.json({ apprenants: data });
//     }
//   );
// };

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
//exports.find = find;
