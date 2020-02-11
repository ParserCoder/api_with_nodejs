const { Schema, model } = require("mongoose")

const todoSchema = new Schema({
  Title: { type: String },
  Description: { type: String }
})

module.exports = model("todo", todoSchema)
