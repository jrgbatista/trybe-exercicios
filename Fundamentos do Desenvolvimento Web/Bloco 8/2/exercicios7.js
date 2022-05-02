const books = require("./template");

module.import = books;

const expectedResult = false;

function authorUnique() {
  return books.every(book =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique());