const { insert, findAll, deleteOne, updateOne } = require("../DB")
const todoSchema = require("../DB/models/todo.model")
const addTodoFactory = require("./add-todo")
const getTodoFactory = require("./get-todos")
const deleteTodoFactory = require("./delete-todo")
const updateTodoFactory = require("./update-todo")

const addTodo = addTodoFactory(todoSchema, insert)
const getTodos = getTodoFactory(todoSchema, findAll)
const deleteTodos = deleteTodoFactory(todoSchema, deleteOne)
const updateTodos = updateTodoFactory(todoSchema, updateOne)

module.exports = {
  addTodo,
  getTodos,
  deleteTodos,
  updateTodos
}
