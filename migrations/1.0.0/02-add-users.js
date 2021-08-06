const faker = require("faker");

const up = async db => {
  const USERS_COUNT = faker.datatype.number({ min: 30, max: 50 });

  const teams = await db.collection("teams").find({}).toArray();
  const users = [];
  for (let i = 0; i < USERS_COUNT; i++) {
    users.push({
      name: faker.name.findName(),
      username: faker.internet.userName(),
      team: faker.random.arrayElement(teams)._id
    });
  }

  await db.collection("users").insertMany(users);
};

module.exports = { up };
