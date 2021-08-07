const logger = require("../../../common/logger");

module.exports = async (req, res, { getInputs }) => {
  try {
    const inputs = await getInputs();
    res.json(inputs);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error });
  }
};
