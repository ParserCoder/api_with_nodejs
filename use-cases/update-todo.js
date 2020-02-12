const { todo } = require("../entities")
module.exports = function updateTodoFactory(schema, findOneAndUpdate) {
  return function updateTodo({ body, params }) {
    // ...
    return new Promise((resolve, reject) => {
      const todoData = todo(body)
      try {
        const updateTodoRecord = findOneAndUpdate(schema, { Title: todoData.getTitle(), Description: todoData.getDescription() }, params.id)
        updateTodoRecord
          .then((data) => {
            resolve({ status: 200, msg: "updated successfully", data })
          })
          .catch(() => {
            reject({ status: 500, msg: "cannot update todo in the database" })
          })
      } catch (err) {
        reject(err)
      }
    })
  }
}
