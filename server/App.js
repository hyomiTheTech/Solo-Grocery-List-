const express = require("express");
const controller = require("./controller");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.get("/", function(req, res) {
  res.send("Hello Worsdsdfsld");
});

app.use(bodyParser.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//==============================Routes===================================

app.get("/todos", controller.listAll);
app.post("/todos", controller.postTodo);
app.delete("/todos/:id", controller.deleteTodo);
app.put("/todos/:id", controller.updateTodo);
