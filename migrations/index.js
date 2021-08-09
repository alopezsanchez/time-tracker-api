const { database, config: migrateConfig, up: migrationUp } = require("migrate-mongo");
const config = require("config");
const logger = require("pino")();

const { version } = require("../package.json");

migrateConfig.set({
  mongodb: {
    url: `${config.db.protocol}://${config.db.user}:${config.db.password}@${config.db.host}/${config.db.database}`,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
  migrationsDir: `migrations/${version}`,
  changelogCollectionName: "changelog"
});

const up = async () => {
  if (config.db.migrations.enabled) {
    const { db, client } = await database.connect();
    try {
      const migrated = await migrationUp(db, client);
      migrated.forEach(fileName => logger.info(`Migrated: ${fileName}`));
    } catch ({ message }) {
      logger.error({ message });
    } finally {
      await client.close();
    }
  }
};

module.exports = { up };
