const books = require("./template");

module.import = books;

function getNamedBook() {
  // escreva seu código aqui
  return books.find(book => book.name.length === 26);
}
console.log(getNamedBook(books));