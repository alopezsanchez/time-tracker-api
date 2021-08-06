const db = require("./infraestructure/db");
const serverContainer = require("./infraestructure/server");

const userDataSourceContainer = require("./infraestructure/db/dataSources/user");
const userInteractorContainer = require("./domain/interactors/user");

const userDataSource = userDataSourceContainer.init(db.schemas.User);
const userInteractor = userInteractorContainer.init(userDataSource);

serverContainer.init({ userInteractor });
db.connect();
