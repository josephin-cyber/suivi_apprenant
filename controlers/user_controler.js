const get = (connection, req, res) => {
  connection.query(
    `SELECT * FROM utilisateur INNER JOIN utilisateur_permission ON utilisateur_permission.id_utilisateur=utilisateur.id_utilisateur`,
    (error, data) => {
      if (error) return res.json({ error}).status(500);
      return res.json({ data }).status(200);
    }
  );
};

const post = (connection, req, res) => {
  connection.query(
    `insert into utilisateur ('nom_utilisateur', 'pwd_utilisateur', 'email_utilisateur') values ('${req.fields.nom}', SHA1('${req.fields.pwd}'), '${req.fields.email}')`,
    (error, data) => {
      if (error) return res.json({error}).status(500);
      return res.json({ data }).status(200);
    }
  );
};

const put = (connection, req, res) => {
  connection.query(
    `ALTER TABLE utilisateur SET nom_utilisateur='${req.fields.nom}', pwd_utilisateur=SHA1('${req.fields.pwd}'), email_utilisateur='${req.fields.email}' WHERE id_utilisateur=${req.fields.id_utilisateur}`,
    (error, data) => {
      if (error) return res.json({ error }).status(500);
      return res.json({ data });
    }
  );
};

const drop = (connection, req, res) => {
  connection.query(
    `delete from utilisateur where id=${req.fields.id_utilisateur}`,
    (error, data) => {
      if (error) return res.json({ error }).status(500);
      return res.json({ data });
    }
  );
};

exports.get = get;
exports.post = post;
exports.put = put;
exports.drop = drop;
