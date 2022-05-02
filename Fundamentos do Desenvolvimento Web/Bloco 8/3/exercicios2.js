const books = require('../2/template');

module.import = books;

const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  // escreva seu código aqui
  return books
    .map(book => (
      {
        author: book.author.name,
        age: book.releaseYear - book.author.birthYear,
      }
    )).sort((obj1, obj2) => obj1.age - obj2.age);
}
console.log(nameAndAge());