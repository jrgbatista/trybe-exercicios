const books = require('../2/template');

module.import = books;

const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
  const qtyBooks = books.length;
  const sumAges = books
    .map(book => book.releaseYear - book.author.birthYear)
    .reduce((acc, curr) => (acc + curr));
  return sumAges / qtyBooks;
}

console.log(averageAge());