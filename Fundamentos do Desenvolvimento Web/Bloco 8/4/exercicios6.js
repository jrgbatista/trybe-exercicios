const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const sumGrades = (acc, grade) => acc + grade;

const calcAverage = (i) => {
  const sum = grades[i].reduce(sumGrades);
  return sum / grades[i].length;
}

function studentAverage() {
  // escreva seu código aqui
  return students.reduce((acc, student, i) => {
    const obj = {
      name: student,
      average: calcAverage(i)
    };
    acc.push(obj);
    return acc;
  }, []);
}
console.log(studentAverage());
