const a = 17;
const b = 65;

//Adição
const c = a + b;
console.log(c)

//Subtração
const d = a - b;
console.log(d)

//Multiplicação
const e = a * b;
console.log(e)

//Divisão
const f = a / b;
console.log(f)

//Módulo
const g = a % b;
console.log(e)

//Maior dos 2
if (c > e) {
    console.log(c)
}
else {
    console.log(e)
}

//Maior dos 3
if (a > b && a > c) {
    console.log(a)
}
else if (b > a && b > c) {
    console.log(b)
}
else if (c > a && c > b) {
    console.log(c)
}
else {
    console.log('ERROR')
}

//Positivo, negativo ou zero
if (g > 0) {
    console.log('Positive')
}
else if (g < 0) {
    console.log('Negative')
}
else {
    console.log('Zero')
}

//Ângulos internos do triângulo
const triA = 45;
const triB = 60;
const triC = 90;

if (triA < 0 || triB < 0 || triC < 0) {
    console.log('ERROR')
}
else if (triA + triB + triC === 180) {
    console.log(true)
}
else {
    console.log(false)
}

//Peça de xadrez e seu movimento correspondente
let peca = 'RAINHA'.toLowerCase();

switch (peca) {
    case "bispo":
        console.log('diagonais')
        break;

    case "rei":
        console.log('qualquer direção, uma casa por vez')
        break;

    case "rainha":
        console.log('qualquer direção')
        break;

    case "cavalo":
        console.log('movimento em "L"')
        break;

    case "torre":
        console.log('verticais e horizontais')
        break;

    case "peão":
        console.log('primeiro movimento permite duas casas à frente, então, somente uma por vez')
        break;

    default:
        console.log('Peça inválida')
}