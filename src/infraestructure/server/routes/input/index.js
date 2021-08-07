const express = require("express");
const getInputsController = require("../../controllers/input/getInputs");
const createInputController = require("../../controllers/input/createInput");

module.exports.init = inputInteractor => {
  const router = express.Router();
  router.get("/", (req, res) => getInputsController(req, res, inputInteractor));
  router.post("/", (req, res) => createInputController(req, res, inputInteractor));

  return router;
};
