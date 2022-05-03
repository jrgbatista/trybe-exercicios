const books = require('../2/template');

module.import = books;

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  // escreva seu código aqui
  return books
    .reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);
}
console.log(longestNamedBook());