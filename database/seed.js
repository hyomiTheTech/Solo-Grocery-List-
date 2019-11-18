const db = require("./index");

const Lists = [
  {
    todoList: "Study"
  },
  {
    todoList: "Study little more"
  },
  {
    todoList: "Little more"
  },
  {
    todoList: "Almost there!"
  },
  {
    todoList: "DONE!"
  }
];

Lists.forEach(todo => {
  db.query(`INSERT INTO todos(todoList) VALUES ("${todo.todoList}");`);
});
