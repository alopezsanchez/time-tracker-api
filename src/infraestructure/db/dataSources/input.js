module.exports.init = schema => ({
  findAll: async () => schema.find().populate(["user"]).exec(),
  findByUser: async userId => schema.find({ user: userId }).sort({ startAt: 1 }).populate(["user"]).exec(),
  create: async data => {
    return new schema(data).save();
  }
});
