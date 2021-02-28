const get = (connection, req, res) => {
    connection.query(`SELECT * FROM permission`, (error, data) => {
      if (error) return res.json({ error });
      return res.json({ data });
    });
  };
  
exports.get = get;  