module.exports = function databaseFactory() {
  function insert(schema, data) {
    return new schema(data).save()
  }
  function findAll(schema) {
    return schema.find().exec()
  }
  function findOne(schema, id) {}
  function updateOne(schema, data, id) {
    return schema.findOneAndUpdate({ _id: id }, { $set: data }).exec()
  }
  function deleteOne(schema, id) {
    return schema.findOneAndDelete({ _id: id }).exec()
  }

  return {
    insert,
    updateOne,
    deleteOne,
    findAll,
    findOne
  }
}
