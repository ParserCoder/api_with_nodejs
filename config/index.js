module.exports = {
  PORT: process.env.PORT || 8100,
  DB_URI: process.env.DB_URI || "mongodb://127.0.0.1:27017/create_node_api",
  MONGOOSE_OPTIONS: { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
}
