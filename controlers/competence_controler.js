const get = (connection, req, res) => {
  connection.query(`SELECT * FROM competence`, (error, data) => {
    if (error) return res.json({ error });
    return res.json({ data });
  });
};

const get_apprenant = (connection, req, res) => {
  connection.query(
    `SELECT * FROM competence INNER JOIN apprenant_competence ON competence.id_competence=apprenant_competence.id_competence`,
    (error, data) => {
      if (error) return res.json({ error });
      return res.json({ data });
    }
  );
};

const post = (connection, req, res) => {
  connection.query(
    `INNER INTO competence (nom_comptence) VALUES ('${req.fields.nom}')`,
    (error, data) => {
      if (error) return res.json({ error });
      return res.json({ data });
    }
  );
};

const put = (connection, req, res) => {
  connection.query(
    `UPDATE competence SET nom_comptence='${req.fields.nom}' WHERE id_competence ='${req.fields.id_competence}'`,
    (error, data) => {
      if (error) return res.json({ error });
      return res.json({ data });
    }
  );
};

const drop = (connection, req, res) => {
  connection.query(
    `DELETE FROM competence WHERE id_competence ='${req.fields.id}'`,
    (error, data) => {
      if (error) return res.json({ error });
      return res.json({ data });
    }
  );
};

exports.get = get;
exports.get_apprenant = get_apprenant;
exports.post = post;
exports.put = put;
exports.drop = drop;
