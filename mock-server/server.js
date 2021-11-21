const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes.js");
const expressJwt = require('express-jwt');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Not really in use - we don't have protected endpoints. Once we have something to protect it's better to do it per each route
app.use(expressJwt({secret: 'bookstore-app-super-strong-secret', algorithms: ['HS256']}).unless({path: ['/auth', '/books']}));

routes(app);

const server = app.listen(3000, function () {
  console.log(`Bookstore API is running on http://localhost:${server.address().port}`);
});
