// todo router
const Router = require("express").Router()
const { todo, getTodos, deleteTodo, updateTodo } = require("../controllers")

function adaptControllers(controller) {
  return (req, res) => {
    const httpRequest = Object.freeze({
      body: req.body,
      params: req.params,
      query: req.query
    })

    controller(httpRequest)
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.json(err)
      })
  }
}

Router.post("/", adaptControllers(todo))
Router.get("/", adaptControllers(getTodos))
Router.delete("/:id", adaptControllers(deleteTodo))
Router.put("/:id", adaptControllers(updateTodo))

module.exports = Router
