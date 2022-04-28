const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const criarTurno = (novo) => lesson2.turno = novo;
criarTurno('noite');
console.log(lesson2);

const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson1));

const objSize = (obj) => Object.entries(obj).length;
console.log(objSize(lesson1));

const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// const totalStudents = () => {
//   const sumStudents = parseInt(allLessons.lesson1.numeroEstudantes) + parseInt(allLessons.lesson2.numeroEstudantes) + parseInt(allLessons.lesson3.numeroEstudantes);
//   return sumStudents;
// }
// console.log(totalStudents());
const totalStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(totalStudents(allLessons));

const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber(allLessons, 0));