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

//Conversão de nota dada em porcentagem (0 a 100) em conceitos A a F
let nota = '43';

if (nota >= 90 && nota <= 100) {
    nota = 'A'
    console.log('Você tirou a nota: ' + nota)
}
else if (nota >= 80) {
    nota = 'B'
    console.log('Você tirou a nota: ' + nota)
}
else if (nota >= 70) {
    nota = 'C'
    console.log('Você tirou a nota: ' + nota)
}
else if (nota >= 60) {
    nota = 'D'
    console.log('Você tirou a nota: ' + nota)
}
else if (nota >= 50) {
    nota = 'E'
    console.log('Você tirou a nota: ' + nota)
}
else if (nota < 50 && nota >= 0) {
    nota = 'F'
    console.log('Você tirou a nota: ' + nota)
}
else {
    console.log('Valor inválido')
}

//verificando se há números pares
const numA = 2;
const numB = 4;
const numC = 6;

if (numA % 2 === 0 || numB % 2 === 0 || numC % 2 === 0) {
    console.log(true)
}
else {
    console.log(false)
}
//verificando se há números ímpares
if (numA % 2 !== 0 || numB % 2 !== 0 || numC % 2 !== 0) {
    console.log(true)
}
else {
    console.log(false)
}

//cálculo de salário líquido
let salarioBruto = 10000;

if (salarioBruto <= 1556.94) {
    INSS = salarioBruto * 8 / 100
    valorDeduzido = salarioBruto - INSS
    console.log('Alíquota de 8% do INSS sobre o salário bruto e isenção de IR.')
    console.log('Seu salário líquido é igual a R$ ' + valorDeduzido.toFixed(2))
}

else if (salarioBruto >= 1556.95 && salarioBruto <= 1903.98) {
    INSS = salarioBruto * 9 / 100
    valorDeduzido = salarioBruto - INSS
    console.log('Alíquota de 9% do INSS sobre o salário bruto e isenção de IR.')
    console.log('Seu salário líquido é igual a R$ ' + valorDeduzido.toFixed(2))
}

else if (salarioBruto >= 1903.99 && salarioBruto <= 2594.92) {
    INSS = salarioBruto * 9 / 100
    valorDeduzido = salarioBruto - INSS
    IR = (valorDeduzido * 7.5 / 100) - 142.8
    salarioLiquido = valorDeduzido - IR
    console.log('Alíquota de 9% do INSS sobre o salário bruto e IR de 7,5% e parcela de R$ 142,80 a deduzir do imposto.')
    console.log('Seu salário líquido é igual a R$ ' + salarioLiquido.toFixed(2))
}

else if (salarioBruto >= 2594.93 && salarioBruto <= 2826.65) {
    INSS = salarioBruto * 11 / 100
    valorDeduzido = salarioBruto - INSS
    IR = (valorDeduzido * 7.5 / 100) - 142.8
    salarioLiquido = valorDeduzido - IR
    console.log('Alíquota de 11% do INSS sobre o salário bruto e IR de 7,5% e parcela de R$ 142,80 a deduzir do imposto.')
    console.log('Seu salário líquido é igual a R$ ' + salarioLiquido.toFixed(2))
}

else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
    INSS = salarioBruto * 11 / 100
    valorDeduzido = salarioBruto - INSS
    IR = (valorDeduzido * 15 / 100) - 354.8
    salarioLiquido = valorDeduzido - IR
    console.log('Alíquota de 11% do INSS sobre o salário bruto e IR de 15% e parcela de R$ 354,80 a deduzir do imposto.')
    console.log('Seu salário líquido é igual a R$ ' + salarioLiquido.toFixed(2))
}

else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    INSS = salarioBruto * 11 / 100
    valorDeduzido = salarioBruto - INSS
    IR = (valorDeduzido * 22.5 / 100) - 636.13
    salarioLiquido = valorDeduzido - IR
    console.log('Alíquota de 11% do INSS sobre o salário bruto e IR de 22,5% e parcela de R$ 636,13 a deduzir do imposto.')
    console.log('Seu salário líquido é igual a R$ ' + salarioLiquido.toFixed(2))
}

else if (salarioBruto >= 4664.69 && salarioBruto <= 5189.82) {
    INSS = salarioBruto * 11 / 100
    valorDeduzido = salarioBruto - INSS
    IR = (valorDeduzido * 27.5 / 100) - 869.36
    salarioLiquido = valorDeduzido - IR
    console.log('Alíquota de 11% do INSS sobre o salário bruto e IR de 27,5% e parcela de R$ 869,36 a deduzir do imposto.')
    console.log('Seu salário líquido é igual a R$ ' + salarioLiquido.toFixed(2))
}

else {
    INSS = salarioBruto * 11 / 100
    if (INSS > 570.87) {
        INSS = 570.88
        valorDeduzido = salarioBruto - INSS
        IR = (valorDeduzido * 27.5 / 100) - 869.36
        salarioLiquido = valorDeduzido - IR
        console.log('Alíquota máxima do INSS de R$ 570,88 sobre o salário bruto e IR de 27,5% e parcela de R$ 869,36 a deduzir do imposto.')
        console.log('Seu salário líquido é igual a R$ ' + salarioLiquido.toFixed(2))
    }
}