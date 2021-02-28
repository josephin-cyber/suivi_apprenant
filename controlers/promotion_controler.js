const get = (connection, req, res) => {
    connection.query(
      `SELECT * FROM promotion`,
      (error, data) => {
        if (error) return res.json({ error });
        return res.json({ data });
      }
    );
  };

const post = (connection, req, res) => {
    connection.query(
      `INSERT INTO promotion (nom_promotion, annee_promotion) VALUES ('${req.fields.nom_promotion}', '${req.fields.annee_promotion}')`,
      (error, data) => {
        if (error) return res.json({ error });
        return res.json({ data });
      }
    );
};

const put = (connection, req, res) => {
    connection.query(
      `UPDATE promotion SET nom_promotion='${req.fields.nom_comptence}', annee_promotion='${req.fields.annee_promotion}' WHERE id_promotion=${req.fields.id_promotion}`,
      (error, data) => {
        if (error) return res.json({ error });
        return res.json({ data });
      }
    );
};

const drop = (connection, req, res) => {
    connection.query(
      `SELECT * FROM promotion`,
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