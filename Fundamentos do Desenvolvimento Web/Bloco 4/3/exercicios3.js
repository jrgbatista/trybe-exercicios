let fat10 = 1;
for (let i = 10; i > 0; i -= 1) {
  fat10 *= i;
}
// console.log(fat10);

let word = 'tryber';
let reverseWord = word.split('').reverse().join('');
// for (let letter = 0; letter < word.length; letter += 1) {
//   reverseWord += word[word.length - 1 - letter];
// }
// console.log(reverseWord);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let longestWord = array[0];
let shortestWord = array[0];

for (let word of array) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}
for (word of array) {
  if (word.length < shortestWord.length) {
    shortestWord = word;
  }
}
// console.log(longestWord);
// console.log(shortestWord);

let highestPrime = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    highestPrime = currentNumber;
  }
}

// console.log(highestPrime);