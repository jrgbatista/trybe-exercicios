const books = require("./exercicios");

module.import = books;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every(book => {
    book.author.birthYear > 1900 && book.author.birthYear <= 2000
  });
}
console.log(everyoneWasBornOnSecXX());