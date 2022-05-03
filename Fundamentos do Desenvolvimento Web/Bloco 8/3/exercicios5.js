const books = require('../2/template');

module.import = books;

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  return books
    .filter(book => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
    .map(book => book.author.name)
    .sort();
}
console.log(fantasyOrScienceFictionAuthors());