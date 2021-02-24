const get = (connection, req, res) => {
  connection.query(
    `SELECT * FROM competence`,
    (error, data) => {
      if (error) return res.json({ error });
      return res.json({ data });
    }
  );
};


exports.get = get;
// exports.post = post;
// exports.put = put;
// exports.find = find;
// exports.drop = drop;
