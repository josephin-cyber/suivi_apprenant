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
      `INSERT INTO promotion (nom_comptence) VALUES ('${req.fields.nom_comptence}')`,
      (error, data) => {
        if (error) return res.json({ error });
        return res.json({ data });
      }
    );
};

const put = (connection, req, res) => {
    connection.query(
      `UPDATE promotion SET nom_comptence='${req.fields.nom_comptence}' WHERE id_competence=${req.fields.id_comptence}`,
      (error, data) => {
        if (error) return res.json({ error });
        return res.json({ data });
      }
    );
};

// const drop = (connection, req, res) => {
//     connection.query(
//       `SELECT * FROM promotion`,
//       (error, data) => {
//         if (error) return res.json({ error });
//         return res.json({ data });
//       }
//     );
// };
  
exports.get = get;
exports.post = post;
exports.put = put;
// exports.drop = drop;