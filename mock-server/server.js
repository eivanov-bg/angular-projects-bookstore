const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes.js");
const hal = require("express-hal");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(hal.middleware);

routes(app);

const server = app.listen(3000, function () {
  console.log(`Bookstore API is running on http://localhost:${server.address().port}`);
});
