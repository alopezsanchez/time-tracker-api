const create = mongoose => {
  const { Schema, model } = mongoose;
  const TeamSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    description: {
      type: String
    }
  });

  return model("Team", TeamSchema);
};

module.exports = { create };
