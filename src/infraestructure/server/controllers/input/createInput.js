const logger = require("../../../common/logger");

module.exports = async (req, res, { createInput }) => {
  try {
    const newInput = await createInput(req.body);
    res.json(newInput);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error });
  }
};
