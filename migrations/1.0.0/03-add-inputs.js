const faker = require("faker");

const up = async db => {
  const EIGHT_HOURS_IN_MILLISECONDS = 1000 * 60 * 60 * 8;

  const users = await db.collection("users").find({}).toArray();
  const inputs = [];

  users.forEach(user => {
    for (let i = 1; i < 32; i++) {
      const startAt = +new Date(2021, 6, i, faker.datatype.number({ min: 7, max: 10 }), 0, 0, 0);
      const endAt = +new Date(2021, 6, i, faker.datatype.number({ min: 15, max: 20 }), 0, 0, 0);

      const workingTime = endAt - startAt;
      const overtime = workingTime > EIGHT_HOURS_IN_MILLISECONDS ? workingTime - EIGHT_HOURS_IN_MILLISECONDS : 0;

      inputs.push({
        startAt,
        endAt,
        overtime,
        user: user._id
      });
    }
  });

  await db.collection("inputs").insertMany(inputs);
};

module.exports = { up };
