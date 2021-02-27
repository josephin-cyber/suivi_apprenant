let table = "utilisateur";
let foreign = "role";

const get = (connection, req, res) => {
  connection.query(
    `SELECT * FROM ${table} 
    INNER JOIN ${foreign} ON ${foreign}.id_${table}=${table}.id_utilisateur`,
    (erreur, data) => {
      if (erreur) throw erreur;
      return res.json({ data: data });
    }
  );
};

const post = (connection, req, res, payload) => {
  connection.query(
    `insert into ${table} ('name') values (${payload.name})  `,
    (erreur, data) => {
      if (erreur) throw erreur;
      return res.json({ apprenants: data });
    }
  );
};

const put = (connection, req, res) => {
  connection.query(`alter table ${table}`, (erreur, data) => {
    if (erreur) throw erreur;
    return res.json({ apprenants: data });
  });
};

const login = (connection, req, res) => {
  connection.query(
    `select * from ${table} WHERE email_utiisateur='${req.fields.email}' AND pwd_utilisateur=SHA1('${req.fields.pwd}') where id=${req.fields.id_utilisateur}`,
    (erreur, data) => {
      if (erreur) throw erreur;
      return res.json({ apprenants: data });
    }
  );
};

const drop = (connection, req, res, payload) => {
  connection.query(
    `delete from ${table} where id=${payload.id}`,
    (erreur, data) => {
      if (erreur) throw erreur;
      return res.json({ apprenants: data });
    }
  );
};

exports.get = get;
exports.post = post;
exports.put = put;
exports.login = login;
exports.drop = drop;
