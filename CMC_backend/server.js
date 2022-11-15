// https://www.bezkoder.com/node-js-express-sequelize-mysql/

const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSSequelize = require('@adminjs/sequelize')

//import { Clubs } from './app/models/clubs.model'

const Clubs = require("./app/models/clubs.model");
const db = require("./app/models");

const express = require("express");
const cors = require("cors");

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

const app = express();

const corsOptions = {
  origin: "http://localhost:9000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({ force: false })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

require("./app/routes/clubs.routes")(app);
require("./app/routes/organigramme.routes")(app);
require("./app/routes/vigils.routes")(app);


// https://docs.adminjs.co/installation/plugins/express
const adminOptions = {
  resources: [db.clubs, db.organigramme, db.vigils],
}
const admin = new AdminJS(adminOptions)
const adminRouter = AdminJSExpress.buildRouter(admin)
app.use(admin.options.rootPath, adminRouter)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`);
});