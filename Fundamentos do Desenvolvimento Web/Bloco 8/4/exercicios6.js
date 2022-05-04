const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const sumGrades = (acc, grade) => acc + grade;

const calcAverage = (index) => {
  const sum = grades[index].reduce(sumGrades);
  return sum / grades[index].length;
}

function studentAverage() {
  // escreva seu código aqui
  return students.reduce((acc, curr, index) => {
    const obj = {
      name: curr,
      average: calcAverage(index)
    };
    acc.push(obj);
    return acc;
  }, []);
}
console.log(studentAverage());
