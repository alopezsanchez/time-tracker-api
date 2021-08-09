const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const config = require("../common/config");
const userRouter = require("./routes/user");
const inputRouter = require("./routes/input");

const port = process.env.PORT || config.get("service.port");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.set("trust proxy", true);

module.exports.init = interactors => {
  app.use("/api/v1/users", userRouter.init(interactors.userInteractor));
  app.use("/api/v1/inputs", inputRouter.init(interactors.inputInteractor));

  app.listen(port, () => {
    console.log(`Service listening on port ${port}!`);
  });
};
