const books = require('../2/template');
const currentYear = require('./exercicios4')

module.import = books, currentYear;

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // escreva seu código aqui
  return books
  .filter(book => (currentYear - book.releaseYear) > 60)
  .map(book => book.name);
}
console.log(oldBooks());
