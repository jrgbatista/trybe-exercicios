let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let i = 0; i < fruits.length; i += 1) {
    sum += fruits[i];
}

if (sum > 15) {
    console.log(sum);
}

else {
    console.log("valor menor que 16");
}