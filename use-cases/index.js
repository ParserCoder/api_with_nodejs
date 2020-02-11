const { insert, findAll, findOne } = require("../DB")
const todoSchema = require("../DB/models/todo.model")
const addTodoFactory = require("./add-todo")
const getTodoFactory = require("./get-todos")

const addTodo = addTodoFactory(todoSchema, insert)
const getTodos = getTodoFactory(todoSchema, findAll)

module.exports = {
  addTodo,
  getTodos
}
