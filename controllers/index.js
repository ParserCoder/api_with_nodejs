const todoController = require("./todo")
const getTodosController = require("./get-todos")
const deleteTodosController = require("./delete-todo")
const updateTodosController = require("./update-todo")

const todo = todoController()
const getTodos = getTodosController()
const deleteTodo = deleteTodosController()
const updateTodo = updateTodosController()
module.exports = {
  todo,
  getTodos,
  updateTodo,
  deleteTodo
}
