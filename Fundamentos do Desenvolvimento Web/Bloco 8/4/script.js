const estudantes = require('../3/template');

module.import = estudantes;

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sumNumbers = (array) => array.filter((number) => number % 2 === 0)
//   .reduce((currentValue, number) => currentValue + number); // Olhe que código pequeno e conciso! 

const sumNumbers = (array) => array.reduce((currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
));

console.log(sumNumbers(numbers)); // 152

const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name
}));

console.log(reportBetter(estudantes));
