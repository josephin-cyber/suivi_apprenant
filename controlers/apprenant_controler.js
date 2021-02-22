let table = "apprenant";
let foreign = "apprenant_competence";
let foreign_ = "promotion_cohorte";

const get = (connection, req, res) => {
  connection.query(
    `SELECT * FROM ${table} 
    INNER JOIN ${foreign} ON ${foreign}.id_${table}=${table}.id_apprenant 
    INNER JOIN ${foreign_} ON ${foreign_}.id_${foreign_}=${table}.id_${foreign_}`,
    (error, data) => {
      if (error) return res.json({ error });
      return res.json({ data });
    }
  );
};

const post = (connection, req, res) => {
  connection.query(
    `INSERT INTO ${table} (photo_apprenant, nom_apprenant, postnom_apprenant,prenom_apprenant, sex_apprenant, adresse_apprenant, email_apprenant,tel_apprenant, date_naissance, niveau_detude, id_promotion_cohorte) VALUES ('${req.fields.photo}','${req.fields.nom}', '${req.fields.post_nom}', '${req.fields.prenom}', '${req.fields.sex}', '${req.fields.adress}', '${req.fields.email}', '${req.fields.tel}', '${req.fields.date}', '${req.fields.niveau}', ${req.fields.id_promotion_cohorte})`,
    (error, data) => {
      if (error) return res.json({ error });
      return res.json({ data });
    }
  );
};

const put = (connection, req, res) => {
  connection.query(
    `UPDATE ${table} SET photo_apprenant='${req.fields.photo}', nom_apprenant='${req.fields.nom}', postnom_apprenant='${req.fields.post_nom}',prenom_apprenant='${req.fields.prenom}', sex_apprenant='${req.fields.sex}',adresse_apprenant='${req.fields.adress}', email_apprenant='${req.fields.email}', tel_apprenant='${req.fields.tel}', date_naissance='${req.fields.date}', niveau_detude='${req.fields.niveau}', id_promotion_cohorte=${req.fields.id_promotion_cohorte} WHERE id_apprenant = ${req.params.id}`,
    (error, data) => {
      if (error) return res.json({ error });
      return res.json({ data });
    }
  );
};

const find = (connection, req, res) => {
  connection.query(
    `SELECT * FROM ${table} WHERE id_apprenant=${req.params.payload} OR nom_apprenant LIKE %'${req.params.payload}'%`,
    (error, data) => {
      if (error) return res.json({ error });
      return res.json({ apprenants: data });
    }
  );
};

const drop = (connection, req, res) => {
  connection.query(
    `DELETE FROM ${table} WHERE id_apprenant=${req.params.id}`,
    (error, data) => {
      if (error) return res.json({ error });
      return res.json({ data });
    }
  );
};

exports.get = get;
exports.post = post;
exports.put = put;
exports.find = find;
exports.drop = drop;
