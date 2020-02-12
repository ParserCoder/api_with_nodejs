const mongoose = require("mongoose")
const { DB_URI, MONGOOSE_OPTIONS } = require("../config")
const dbFactory = require("./db")
mongoose
  .connect(DB_URI, MONGOOSE_OPTIONS)
  .then(() => {
    console.log(`database connected!!`)
  })
  .catch((err) => {
    console.error(err)
  })

const { insert, updateOne, deleteOne, findAll, findOne } = dbFactory()

module.exports = { insert, updateOne, deleteOne, findAll, findOne }
