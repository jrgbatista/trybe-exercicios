let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// organizando em ordem crescente
for (let i = 1; i < numbers.length; i += 1) {
  for (let j = 0; j < i; j += 1) {
    if (numbers[i] < numbers[j]) {
      let position = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
// console.log(numbers);

// organizando em ordem decrescente
for (let i = 1; i < numbers.length; i += 1) {
  for (let j = 0; j < i; j += 1) {
    if (numbers[i] > numbers[j]) {
      let position = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
// console.log(numbers);

// criando um novo array com números multiplicados pelo seu próximo
let newArray = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (i + 1 < numbers.length) {
    newArray.push(numbers[i] * numbers[i] + 1);
  } else {
    newArray.push(numbers[i] * 2);
  }
}
// console.log(newArray);