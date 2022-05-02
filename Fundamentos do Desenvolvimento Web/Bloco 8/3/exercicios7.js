const books = require('../2/template');

module.import = books;

const expectedResult = 'O Senhor dos Anéis';

// function authorWith3DotsOnName() {
//   return books.find((book) => (
//     book.author.name.split(' ')
//       .filter((word) => word.endsWith('.')).length === 3
//   )).name;
// }
// console.log(authorWith3DotsOnName());