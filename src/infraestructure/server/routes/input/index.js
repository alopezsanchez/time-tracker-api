const express = require("express");
const getInputsController = require("../../controllers/input/getInputs");
const getInputsByUserController = require("../../controllers/input/getInputsByUser");
const createInputController = require("../../controllers/input/createInput");

module.exports.init = inputInteractor => {
  const router = express.Router();
  router.get("/", (req, res) => getInputsController(req, res, inputInteractor));
  router.get("/:userId", (req, res) => getInputsByUserController(req, res, inputInteractor));
  router.post("/", (req, res) => createInputController(req, res, inputInteractor));

  return router;
};
