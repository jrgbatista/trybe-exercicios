const books = require("./template");

module.import = books;

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}
console.log(booksOrderedByReleaseYearDesc());