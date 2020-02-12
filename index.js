const express = require("express")
const { PORT } = require("./config")
const todoRouter = require("./routes/todo")
const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/todos", todoRouter)

app.listen(PORT, () => {
  console.log(`Server runs at port ${PORT}`)
})
