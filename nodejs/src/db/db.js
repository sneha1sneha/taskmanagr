const mysql = require("mysql");
const { BadRequestError, NotFoundError } = require('../utils/api-errors');




const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'trial'
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Mysql: Connected');
});
db.promise = (sql, fileds) => {

  if (fileds) {
    //
    console.log("fileds", fileds)
    return new Promise((resolve, reject) => {
      db.query(sql, fileds, (err, result) => {
        console.log('sql, fileds 2' + sql, fileds);
        if (err) {
          reject(new Error());
        } else {
          resolve(result);
        }
      });
    });
  } else {
    // console("fileds",fileds)
    console.log("sql", sql)
    return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        console.log(result)
        if (err) {
          reject(new Error());
        } else {
          resolve(result);
        }
      });
    });
  }


};




module.exports = db;
