module.exports = function databaseFactory() {
  function insert(schema, data) {
    return new schema(data).save()
  }
  function findAll(schema) {
    return schema.find().exec()
  }
  function findOne(schema, id) {}
  function update(schema, data, id) {}
  function deleteOne(schema, id) {}

  return {
    insert,
    update,
    deleteOne,
    findAll,
    findOne
  }
}
