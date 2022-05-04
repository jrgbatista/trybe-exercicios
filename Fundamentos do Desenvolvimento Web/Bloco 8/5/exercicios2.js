const sum = (...rest) => rest.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 14, 16, 3));