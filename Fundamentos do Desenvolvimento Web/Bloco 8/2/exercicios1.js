const books = require("./template");

module.import = books;

function authorBornIn1947() {
  // escreva aqui o seu código
  return books
    .find(book => book.author.birthYear === 1947).author.name;
}
console.log(authorBornIn1947(1947));