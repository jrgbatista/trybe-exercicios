const testingScope = (escopo) => (
  escopo === true ? `Ótimo, fui utilizada no escopo!` : `Não devo ser utilizada fora do meu escopo!`
);
console.log(testingScope(!true));
console.log(testingScope(true));

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados em forma crescente.`);

const factorial = num => num !== 0 ? num * factorial(num - 1) : 1;
console.log(factorial(3));