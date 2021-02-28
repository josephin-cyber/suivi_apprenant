const get = (connection, req, res) => {
  connection.query(`SELECT * FROM competence`, (error, data) => {
    if (error) return res.json({ error }).status(500);
    return res.json({ data }).status(200);
  });
};

const get_select = (connection, req, res) => {
  connection.query(
    `SELECT * FROM competence INNER JOIN apprenant_competence ON competence.id_competence=apprenant_competence.id_competence`,
    (error, data) => {
      if (error) return res.json({ error }).status(500);
      return res.json({ data }).status(200);
    }
  );
};

const post = (connection, req, res) => {
  connection.query(
    `INSERT INTO competence (nom_competence) VALUES ('${req.fields.nom}')`,
    (error, data) => {
      if (error) return res.json({ error }).status(500);
      return res.json({ data }).status(200);
    }
  );
};

const put = (connection, req, res) => {
  connection.query(
    `UPDATE competence SET nom_competence='${req.fields.nom}' WHERE id_competence ='${req.fields.id_competence}'`,
    (error, data) => {
      if (error) return res.json({ error }).status(500);
      return res.json({ data }).status(200);
    }
  );
};

const drop = (connection, req, res) => {
  connection.query(
    `DELETE FROM competence WHERE id_competence ='${req.fields.id}'`,
    (error, data) => {
      if (error) return res.json({ error }).status(500);
      return res.json({ data }).status(200);
    }
  );
};

exports.get = get;
exports.get_select = get_select;
exports.post = post;
exports.put = put;
exports.drop = drop;
