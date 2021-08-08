const logger = require("../../../common/logger");

module.exports = async (req, res, { getInputsByUser }) => {
  try {
    const inputs = await getInputsByUser(req.params.userId);
    res.json(inputs);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error });
  }
};
