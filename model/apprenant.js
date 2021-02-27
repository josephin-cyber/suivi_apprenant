const select=(db)=>{
    let result={};
    db.query(
        `SELECT * FROM apprenant 
        INNER JOIN apprenant_competence ON apprenant_competence.id_apprenant=apprenant.id_apprenant 
        INNER JOIN promotion_cohorte ON promotion_cohorte.id_promotion_cohorte=apprenant.id_promotion_cohorte
        INNER JOIN competence ON apprenant_competence.id_competence=competence.id_competence
        INNER JOIN promotion ON promotion.id_promotion=promotion_cohorte.id_promotion`,
        (error, data) => {
          if (error) result.error=error ;
          result.data=data ;
        }
        );
        
      console.log(result);
      return result;
}

const select_one=(db, id)=>{
    db.query(
        `SELECT * FROM apprenant WHERE id_apprenant=${id}
        INNER JOIN apprenant_competence ON apprenant_competence.id_apprenant=apprenant.id_apprenant 
        INNER JOIN promotion_cohorte ON promotion_cohorte.id_promotion_cohorte=apprenant.id_promotion_cohorte
        INNER JOIN competence ON apprenant_competence.id_competence=competence.id_competence
        INNER JOIN promotion ON promotion.id_promotion=promotion_cohorte.id_promotion`,
        (error, data) => {
          if (error) return  error ;
          return data ;
        }
      );
}

const insert=(db, fields)=>{
    db.query(
        `INSERT INTO apprenant (photo_apprenant, nom_apprenant, postnom_apprenant,prenom_apprenant, sex_apprenant, adresse_apprenant, email_apprenant,tel_apprenant, date_naissance, niveau_detude, id_promotion_cohorte) VALUES ('${fields.photo}','${fields.nom}', '${fields.post_nom}', '${fields.prenom}', '${fields.sex}', '${fields.adress}', '${fields.email}', '${fields.tel}', '${fields.date}', '${fields.niveau}', ${fields.id_promotion_cohorte})`,
        (error, data) => {
          if (error) return error;
          return data ;
        }
      );
}

const update=(db, fields)=>{
    db.query(
        `UPDATE apprenant SET photo_apprenant='${fields.photo}', nom_apprenant='${fields.nom}', postnom_apprenant='${fields.post_nom}',prenom_apprenant='${fields.prenom}', sex_apprenant='${fields.sex}',adresse_apprenant='${fields.adress}', email_apprenant='${fields.email}', tel_apprenant='${fields.tel}', date_naissance='${fields.date}', niveau_detude='${fields.niveau}', id_promotion_cohorte=${fields.id_promotion_cohorte} WHERE id_apprenant = ${params.id}`,
        (error, data) => {
          if (error) return error;
          return data ;
        }
      );
}

const drop=(db, id)=>{
    db.query(
        `DELETE FROM apprenant WHERE id_apprenant=${id}`,
        (error, data) => {
          if (error) return error;
          return data;
        }
      );
}

const insert_competences=(db, payload)=>{}

exports.select = select;
exports.select_one = select_one;
exports.insert = insert;
exports.update = update;
exports.drop = drop;
exports.insert_competences = insert_competences;
