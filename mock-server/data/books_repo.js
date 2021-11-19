const books_db = require("./books_db");

const repo = (function BooksRepo() {
  function getAll(title) {
    if (!!title) {
      console.log(`Filter books by title "${title}"`);

      return books_db.filter( value => value.title.toLowerCase().includes(title.toLowerCase()))
    } else {
      return books_db;
    }
  }

  function getOne(ISBN) {
    console.log(`Filter books by ISBN "${ISBN}"`);
    const result = books_db.filter( value => value.ISBN === ISBN);

    return !!result && result.length > 0 ? result[0] : {};
  }

  return {
    getAll : getAll,
    getOne : getOne
  }
}) ();

module.exports = repo;
