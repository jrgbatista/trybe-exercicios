let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

let sum = numbers.reduce((valAnterior, valorAtual) => valAnterior + valorAtual, 0);
console.log(sum);

mean = sum / numbers.length;
console.log(mean);

if (mean > 20) {
    console.log("valor maior que 20")
}
else {
    console.log("valor menor ou igual a 20")
};

// let largestNum = numbers.reduce((accValue, currValue) => Math.max(accValue, currValue));
// console.log(largestNum);

// let smallestNUm = numbers.reduce((accValue, currValue) => Math.min(accValue, currValue));
// console.log(smallestNUm);

// let odds = numbers.filter(num => num % 2);
// console.log(odds.length);