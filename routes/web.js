const web=(server, db)=>{
    server.get('/', (req, res)=>{
        res.send("Le serveur écoute sur http://127.0.0.1:8000");
      });
}

exports.web = web;
