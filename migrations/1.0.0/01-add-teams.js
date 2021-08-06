const faker = require("faker");

const up = async db => {
  const TEAMS_COUNT = faker.datatype.number({ min: 10, max: 30 });

  const teams = [];
  for (let i = 0; i < TEAMS_COUNT; i++) {
    teams.push({
      name: faker.company.companyName(),
      description: faker.lorem.sentence()
    });
  }

  await db.collection("teams").insertMany(teams);
};

module.exports = { up };
