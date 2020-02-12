// const { todo } = require("../entities")
module.exports = function deleteTodoFactory(schema, findOneAndDelete) {
  return function deleteTodo({ id }) {
    // ...
    return new Promise((resolve, reject) => {
      try {
        const deleteTodoRecord = findOneAndDelete(schema, id)
        deleteTodoRecord
          .then(() => {
            resolve({ status: 200, msg: "deleted successfully" })
          })
          .catch((err) => {
            reject({ status: 500, msg: "cannot delete todo from the database" })
          })
      } catch (err) {
        reject(err)
      }
    })
  }
}
