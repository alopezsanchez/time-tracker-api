const create = mongoose => {
  const { Schema, model } = mongoose;

  const UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    team: {
      type: Schema.ObjectId,
      ref: "Team",
      required: true,
      index: true
    }
  });

  return model("User", UserSchema);
};

module.exports = { create };
