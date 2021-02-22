let table = "apprenant";
let foreign = "apprenant_competence";
let foreign_ = "promotion_cohorte";

const get = (connection, req, res) => {
  connection.query(
    `SELECT * FROM ${table} 
    INNER JOIN ${foreign} ON ${foreign}.id_${table}=${table}.id_competence INNER JOIN ${foreign_} ON ${foreign_}.id_${table}=${table}.id_competence`,
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

const find = (connection, req, res, payload) => {
  connection.query(
    `select * from ${table} where id=${payload.id}`,
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
exports.find = find;
exports.drop = drop;
