class User {
  constructor({ name, username, team } = {}) {
    this.name = name;
    this.username = username;
    this.team = team;
  }
}

module.exports = User;
