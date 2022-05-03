const books = require('../2/template');

module.import = books;

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui)
  const names = books
    .reduce((acc, curr, index, arr) => index === arr.length - 1 ? `${acc} ${curr.author.name}.` : `${acc} ${curr.author.name},`, '');
  return names.trim();
}

console.log(reduceNames());
