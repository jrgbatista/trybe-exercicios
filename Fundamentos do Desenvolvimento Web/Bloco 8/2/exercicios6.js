const books = require("./exercicios");

module.import = books;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some(book => book.releaseYear > 1979 && book.releaseYear < 1990);
}
console.log(someBookWasReleaseOnThe80s());