module.exports = function getTodoFactory(schema, insert) {
  return function getTodo(data) {
    // ...
    return new Promise(async (resolve, reject) => {
      try {
        const todos = await insert(schema)
        if (todos) {
          resolve(todos)
          //
        } else {
          reject({ status: 404, msg: "cannot get todos from the database" })
          //
        }
      } catch (err) {
        reject(err)
      }
    })
  }
}
