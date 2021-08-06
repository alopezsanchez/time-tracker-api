const logger = require("../../../common/logger");

module.exports = async (req, res, { getUsers }) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error });
  }
};
