const todoController = require("./todo")
const getTodosController = require("./get-todos")

const todo = todoController()
const getTodos = getTodosController()
module.exports = {
  todo,
  getTodos
}
