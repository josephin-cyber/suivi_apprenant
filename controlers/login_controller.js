const jwt = require('jsonwebtoken');
const accessTokenSecret=require("../config/jwt");

const post = (connection, req, res) => {
    connection.query(`select * from  utilisateur WHERE email_utilisateur='${req.fields.email}' AND pwd_utilisateur=SHA1('${req.fields.pwd}')`,
      (error, data) => {
        if (error || data.length <=0) return res.status(401).json({ error });
        const accessToken = jwt.sign({data}, accessTokenSecret. accessTokenSecret);
        return res.json({ accessToken, data}).status(200);
      }
    );
  };
  
  exports.post = post;