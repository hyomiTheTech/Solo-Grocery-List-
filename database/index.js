var mysql = require("mysql");

var db = mysql.createConnection({
  database: "todosDB",
  user: "root",
  password: "Rladmlgus90"
});

db.connect();

module.exports = db;
