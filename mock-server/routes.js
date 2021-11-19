const faker = require("faker");
const cors = require("cors");
const repo = require("./data/books_repo");

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

const appRouter = function (app) {

  app.options('*', cors(corsOptions))

  app.get("/", cors(corsOptions), function (req, res) {
    res.status(200).send({ message: 'Welcome to our restful API' });
  });

  app.get("/users", function (req, res) {
    const data = ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email()
    });
    res.status(200).send(data);
  });

  app.get("/users/:num", function (req, res) {
    const users = [];
    const num = req.params.num;

    if (isFinite(num) && num  > 0 ) {
      for (let i = 0; i <= num-1; i++) {
        users.push({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email()
        });
      }

      res.status(200).send(users);

    } else {
      res.status(400).send({ message: 'Invalid number supplied' });
    }
  });

  app.get("/books/:ISBN", cors(corsOptions), function (req, res) {
    const ISBN = req.params.ISBN;
    res.status(200).contentType('application/json').send(repo.getOne(ISBN));
  });

  app.get("/books", cors(corsOptions), function (req, res) {
    res.status(200).contentType('application/json').send(repo.getAll(req.query.title));
  });
}

module.exports = appRouter;
