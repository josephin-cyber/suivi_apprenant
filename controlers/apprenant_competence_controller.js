const post = (connection, req, res) => {
  if (req.fields.competences.length > 0) {
    req.fields.competences.map((item) => {
      connection.query(
        `INSERT INTO apprenant_competence (id_apprenant, id_competence) VALUES ('${req.fields.id_apprenant}', '${item.value}')`,
        (err, result) => {
          if (err) return console.log(err);
        }
      );
    });

    return res.status(200).json({ data: "success" });
  } else {
    return res.status(403).json({ data: "error" });
  }
};

// to refractor 
const drop = (connection, req, res) => {
  if (req.fields.competences.length > 0) {
    req.fields.competences.map((item) => {
      connection.query(
        `DELETE FROM apprenant_competence WHERE id_competence='${item.value}' AND id_apprenant='${req.fields.id_apprenant}'`,
        (err, result) => {
          if (err) return console.log(err);
        }
      );
    });
    return res.status(200).json({ data: "success" });
  } else {
    return res.status(403).json({ data: "error" });
  }
};

exports.post = post;
exports.drop = drop;