const personalData = (id) => {
  const email = id.toLowerCase().split(' ').join('_');
  return {
    nomeCompleto : id,
    email : `${email}@trybe.com`
  };
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(personalData));

// const numberChecker = (myNumber, number) => myNumber === number;

// const lotteryResult = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);

//   return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// };

// console.log(lotteryResult(2, numberChecker));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparingAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  }
  if (rightAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countingPoints = (rightAnswers, studentAnswers, callback) => {
  let counter = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    const callbackReturn = callback(rightAnswers[i], studentAnswers[i]);
    counter += callbackReturn;
  }
  return `Final result: ${counter} points.`
}
console.log(countingPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, comparingAnswers));