const dbHelper = require("../database/dbHelper");

module.exports = controllers = {
  listAll: (req, res) => {
    dbHelper.getAll((err, lists) => {
      if (err) {
        res.status(404).send("Cannot get lists from the Database!!");
      } else {
        res.status(200).send(lists);
      }
    });
  },
  postTodo: (req, res) => {
    console.log(req);
    var todo = req.body.todoList;
    dbHelper.postOne(todo, (err, job) => {
      if (err) {
        res.status(404).send("Cannot post todo into the Database!!");
      } else {
        res.status(200).send(`Successfully inserted ${job}!!`);
      }
    });
  },
  deleteTodo: (req, res) => {
    var id = req.params.id;

    dbHelper.deleteOne(id, (err, jobDone) => {
      if (err) {
        res.status(404).send("Cannot delete todo from the Database!!");
      } else {
        res.status(200).send(`Successfully deleted todoList id${id}!!`);
      }
    });
  },
  updataTodo: (req, res) => {}
};
