class Input {
  constructor({ user, startAt, endAt, overtime } = {}) {
    this.user = user;
    this.startAt = startAt;
    this.endAt = endAt;
    this.overtime = overtime;
  }
}

module.exports = Input;
