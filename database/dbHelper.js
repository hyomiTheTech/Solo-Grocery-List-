const db = require("./index");

module.exports = dbHelper = {
  getAll: callback => {
    db.query(`SELECT * FROM todos`, (err, lists) => {
      if (err) {
        callback(err);
      } else {
        callback(null, lists);
      }
    });
  },
  postOne: (todo, callback) => {
    db.query(`INSERT INTO todos(todoList) VALUES ("${todo}");`, (err, job) => {
      if (err) {
        callback(err);
      } else {
        callback(null, job);
      }
    });
  },
  deleteOne: (id, callback) => {
    db.query(`DELETE FROM todos WHERE id="${id}";`, (err, jobDone) => {
      if (err) {
        callback(err);
      } else {
        callback(null, jobDone);
      }
    });
  }
  updateOne: (id, newTodo, callback)
};
