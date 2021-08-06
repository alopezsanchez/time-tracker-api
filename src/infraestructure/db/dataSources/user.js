module.exports.init = schema => ({
  findAll: async () => schema.find().populate(["team"]).exec()
});
