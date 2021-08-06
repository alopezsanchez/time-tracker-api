const express = require("express");
const getUsersController = require("../../controllers/user/getUsers");

module.exports.init = userInteractor => {
  const router = express.Router();
  router.get("/", (req, res) => getUsersController(req, res, userInteractor));

  return router;
};
