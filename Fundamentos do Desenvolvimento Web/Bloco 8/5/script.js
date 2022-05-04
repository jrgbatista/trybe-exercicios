// spread operator
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'apple', 'pineapple'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['papaya', 'orange', 'kiwi'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

// rest parameter
function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], {})); // Você passou 4 parâmetros para a função.

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

// object destructuring

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const employeeInfo = {
  ...user,
  ...jobInfos,
};

const { name, age, nationality, profession, squad, squadInitials } = employeeInfo;

console.log(`Hi, I'm ${name}, I'm ${age} and ${nationality}. I work as a ${profession} and my squad is ${squad}.`)

// array destructuring
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares);

[, , , ...numerosPares] = numerosPares;
console.log(numerosPares);

// default destructuring
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// object property shorthand
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude
});

console.log(getPosition(-19.8157, -43.9542));

// default parameters
const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(8));