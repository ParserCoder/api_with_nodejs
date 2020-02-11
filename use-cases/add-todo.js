const { todo } = require("../entities")
module.exports = function addTodoFactory(schema, insert) {
  return function addTodo(data) {
    // ...
    return new Promise((resolve, reject) => {
      const todoData = todo(data)

      const todoShape = { Title: todoData.getTitle(), Description: todoData.getDescription() }

      try {
        const addTodoRecord = insert(schema, todoShape)
        if (addTodoRecord) {
          resolve({ status: 201, msg: "add new todo" })
          //
        } else {
          reject({ status: 500, msg: "cannot add todo to the database" })
          //
        }
      } catch (err) {
        reject(err)
      }
    })
  }
}
