const express = require("express");
const helmet = require("helmet");
const config = require("../common/config");
const userRouter = require("./routes/user");

const port = config.get("service.port");

const app = express();

app.use(express.json());
app.use(helmet());
app.set("trust proxy", true);

module.exports.init = interactors => {
  app.use("/api/v1/users", userRouter.init(interactors.userInteractor));

  app.listen(port, () => {
    console.log(`Service listening on port ${port}!`);
  });
};
