const teamSchema = require("./Team");
const userSchema = require("./User");
const inputSchema = require("./Input");

module.exports.create = mongoose => ({
  User: userSchema.create(mongoose),
  Team: teamSchema.create(mongoose),
  Input: inputSchema.create(mongoose)
});
