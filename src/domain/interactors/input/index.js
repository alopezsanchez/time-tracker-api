const Input = require("../../entities/Input");

module.exports.init = inputDataSource => ({
  getInputs: () => inputDataSource.findAll(),
  getInputsByUser: userId => inputDataSource.findByUser(userId),
  createInput: async input => {
    const EIGHT_HOURS_IN_MILLISECONDS = 1000 * 60 * 60 * 8;

    const startAt = +new Date(input.startAt);
    const endAt = +new Date(input.endAt);

    const workingTime = endAt - startAt;
    const overtime = workingTime > EIGHT_HOURS_IN_MILLISECONDS ? workingTime - EIGHT_HOURS_IN_MILLISECONDS : 0;

    const domainModel = new Input({ user: input.user, startAt, endAt, overtime });

    return inputDataSource.create(domainModel);
  }
});
