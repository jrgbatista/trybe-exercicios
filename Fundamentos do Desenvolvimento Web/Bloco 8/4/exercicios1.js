const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arr) {
  // escreva seu código aqui
  const newArr = arr
    .reduce((acc, curr) => acc.concat(curr), []);
  return newArr;
}
console.log(flatten(arrays));