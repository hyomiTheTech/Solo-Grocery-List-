var mysql = require("mysql");

var db = mysql.createConnection({
  database: "todosDB",
  user: "root",
  password: ""
});

db.connect();

module.exports = db;
