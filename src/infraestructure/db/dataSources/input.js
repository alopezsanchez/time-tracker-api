module.exports.init = schema => ({
  findAll: async () => schema.find().populate(["user"]).exec(),
  create: async data => {
    return new schema(data).save();
  }
});
