const mongoose = require("mongoose");
const logger = require("../common/logger");
const config = require("../common/config");
const schemas = require("./schemas");

const connect = async () => {
  try {
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useUnifiedTopology", true);

    await mongoose.connect(`mongodb://${config.db.host}/${config.db.database}`);

    logger.info("Connected to database");
  } catch ({ message }) {
    logger.error(message);
  }
};

module.exports = { connect, schemas: schemas.create(mongoose) };
