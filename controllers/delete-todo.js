// todo controller

const { deleteTodos } = require("../use-cases")
module.exports = function todoController() {
  return (httpRequest) => {
    return new Promise((resolve, reject) => {
      // ...
      try {
        deleteTodos(httpRequest.params)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      } catch (err) {
        reject("cannot perform the add todo controller")
      }
    })
  }
}
