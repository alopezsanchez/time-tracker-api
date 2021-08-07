const create = mongoose => {
  const { Schema, model } = mongoose;

  const schema = new Schema({
    user: {
      type: Schema.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    startAt: {
      type: Date,
      required: true
    },
    endAt: {
      type: Date,
      required: true
    },
    overtime: {
      type: Number,
      required: true,
      index: true
    }
  });

  return model("Input", schema);
};

module.exports = { create };
