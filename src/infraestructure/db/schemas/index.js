const teamSchema = require("./Team");
const userSchema = require("./User");

module.exports.create = mongoose => ({
  User: userSchema.create(mongoose),
  Team: teamSchema.create(mongoose)
});
