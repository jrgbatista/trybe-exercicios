let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (num of numbers) {
  // console.log(num);
}

let sum = 0;
for (num of numbers) {
  sum += num
  // console.log(sum);
}

let mean = sum / numbers.length;
// console.log(mean);

if (mean > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

let odd = 0;
for (num of numbers) {
  if (num % 2 !== 0) {
    odd += 1;
  }
}
if (odd === 0) {
  console.log('nenhum número ímpar encontrado');
} else {
  console.log(odd);
}

let array = [];
for (let i = 1; i <= 25; i += 1) {
  array.push(i);
}
// console.log(array);

for (let i = 0; i < array.length; indexOfPortfolio += 1) {
  console.log(array[i] / 2);
}