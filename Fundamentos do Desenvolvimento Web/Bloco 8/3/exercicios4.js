const books = require('../2/template');

module.import = books;

const expectedResult = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

const currentYear = new Date().getFullYear();

function oldBooksOrdered() {
  // escreva seu código aqui
  // obj Date obtido através do blog: https://www.freecodecamp.org/portuguese/news/date-now-em-javascript-como-obter-a-data-atual-em-javascript/
  return books
  .filter(book => (currentYear - book.releaseYear > 60))
  .sort((objA, objB) => objA.releaseYear - objB.releaseYear)
}
console.log(oldBooksOrdered());

module.exports = currentYear;