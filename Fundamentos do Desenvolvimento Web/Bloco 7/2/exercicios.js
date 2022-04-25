// PARTE I
// Exercício 1
const testingScope = (escopo) => (
  escopo === true ? `Ótimo, fui utilizada no escopo!` : `Não devo ser utilizada fora do meu escopo!`
);
console.log(testingScope(!true));
console.log(testingScope(true));

// Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados em forma crescente.`);

// PARTE II
// Exercício 1
const factorial = num => num !== 0 ? num * factorial(num - 1) : 1;
console.log(factorial(8));

// Exercício 2
// const longestWord = phrase => {
//   let arrOfWords = phrase.split(' ');
//   let maxLength = 0;
//   let res = '';

//   for (const word of arrOfWords) {
//     if (word.length > maxLength) {
//       maxLength = word.length;
//       res = word;
//     }
//   }
//   return res;
// }
const longestWord = phrase => phrase.split(' ').sort((a, b) => b.length - a.length)[0];
console.log(longestWord('Antonio foi no banheiro e não sabemos o que aconteceu'));

// Exercício 3
const button = document.createElement('button');
const span = document.createElement('span');
const appendAndApplyId = (element, elText) => {
  element.innerText = elText;
  const div = document.createElement('div');
  div.appendChild(element);
  document.querySelector('body').appendChild(div);
}

let clickCount = 0;
button.addEventListener('click', () => span.innerHTML = clickCount += 1);

window.onload = function (){
  appendAndApplyId(button, 'Click Me');
  appendAndApplyId(span, clickCount);
};