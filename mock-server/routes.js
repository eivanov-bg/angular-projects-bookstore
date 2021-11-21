const cors = require("cors");
const repo = require("./data/books_repo");
const jwt = require('jsonwebtoken');

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

const USERS = [{username: 'az', id: 1, password: '123'}];

const appRouter = function (app) {

  app.options('*', cors(corsOptions))

  app.get("/", cors(corsOptions), function (req, res) {
    res.status(200).send({ message: 'Welcome to our restful API' });
  });

  app.get("/books/:ISBN", cors(corsOptions), function (req, res) {
    const ISBN = req.params.ISBN;
    res.status(200).contentType('application/json').send(repo.getOne(ISBN));
  });

  app.get("/books", cors(corsOptions), function (req, res) {
    res.status(200).contentType('application/json').send(repo.getAll(req.query.title));
  });

  app.post('/auth', cors(corsOptions), function(req, res) {
    const body = req.body;

    console.log(`Try authenticate user ${body.username} with password ${body.password}`);

    const user = USERS.find(user => user.username === body.username);

    console.log(`Found user ${JSON.stringify(user)}`);

    if(!user || body.password !== user.password) return res.sendStatus(401);

    const token = jwt.sign({ userID: user.id }, 'bookstore-app-super-strong-secret', { expiresIn: '2h' });
    res.send({token});
  });
}

module.exports = appRouter;
