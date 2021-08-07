const db = require("./infraestructure/db");
const serverContainer = require("./infraestructure/server");

const userDataSourceContainer = require("./infraestructure/db/dataSources/user");
const inputDataSourceContainer = require("./infraestructure/db/dataSources/input");
const userInteractorContainer = require("./domain/interactors/user");
const inputInteractorContainer = require("./domain/interactors/input");

const userDataSource = userDataSourceContainer.init(db.schemas.User);
const inputDataSource = inputDataSourceContainer.init(db.schemas.Input);

const userInteractor = userInteractorContainer.init(userDataSource);
const inputInteractor = inputInteractorContainer.init(inputDataSource);

serverContainer.init({ userInteractor, inputInteractor });
db.connect();
