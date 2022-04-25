// Objetos
let firstName = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
// console.log(`A jogadora ${firstName} ${lastName} tem ${age} anos de idade.`);
let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
// console.log(`A jogadora ${firstName} ${lastName} foi eleita a melhor do mundo por ${bestInTheWorld.length} vezes.`);
// console.log(`A jogadora possui ${medals.golden} medalhas de ouro e ${medals.silver} medalhas de prata.`)

// For In e For Of
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
for (person in names) {
  // console.log(`Olá ${names[person]}`);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (key in car) {
  // console.log(key, car[key]);
}

// Funções
let x = 60;
let y = 100;

// const add = () => x + y;
function add() {
  return x + y;
}

// const sub = () => x - y;
function sub() {
  return x - y;
}

// const multiply = () => x * y;
function multiply() {
  return x * y;
}

// const div = () => x / y;
function div() {
  return x / y;
}

// const mod = () => x % y;
function mod() {
  return x % y;
}

// const highestBetweenTwo = () => x > y ? x : y;
function highestBetweenTwo() {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

let z = 9;

function highestBetweenThree() {
  if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
    return 'ERROR. Only numbers allowed';
  } else if (x > y && x > z) {
    return `'x' is the highest number with the value of ${x}`;
  } else if (y > x && y > z) {
    return `'y' is the highest number with the value of ${y}`;
  } else {
    return `'z' is the highest number with the value of ${z}`;
  }
}

console.log(highestBetweenThree());

function isPositive(){
  if (x > 0) {
    return true;
  } else if (x < 0) {
  return false;
  } else {
  return 'zero';
  }
}

function isTriangle(){
  if (x < 0 || y < 0 || z < 0) {
    return false;
  } else if (x + y + z == 180) {
    return true;
  }
  return 'Anything but a triangle';
}