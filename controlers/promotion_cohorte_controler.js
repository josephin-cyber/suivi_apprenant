const get = (connection, req, res) => {
    connection.query(
      `SELECT * FROM promotion_cohorte 
      INNER JOIN promotion ON promotion.id_promotion=promotion_cohorte.id_promotion
      INNER JOIN cohorte ON cohorte.id_cohorte=promotion_cohorte.id_cohorte;
      `,
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
  