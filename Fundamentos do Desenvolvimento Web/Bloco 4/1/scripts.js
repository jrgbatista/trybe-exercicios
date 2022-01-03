//Variáveis
const myName = 'Jorge';
const birthCity = 'São Paulo';
const birthYear = 1994;
console.log()

//Tipos primitivos, tipagem dinâmica e operações aritméticas
const base = 5;
let height = 8;
const area = base * height;
console.log(area)

const perimeter = (base * 2) + (height * 2);
console.log(perimeter)

//Condições If e Else
const nota = 77;
if (nota > 80) {
    resultado = 'Aprovado';
}
else if (nota >= 70 && nota <= 80) {
    resultado = "Em espera";
}
else {
    resultado = 'Reprovado';
}
console.log(resultado)

//Operadores lógicos
const currentHour = 13;
let message = '';
if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir'
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D"
}
else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo para o café da tarde?"
}
else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!"
}
else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado"
}
else {
    message = "Eu deveria estar dormindo..."
}
console.log(message)

let weekDay = "terça"
if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    console.log('Oba! Mais um dia de aprendizado na Trybe!')
}
else if (weekDay === 'sábado' || weekDay === 'domingo') {
    console.log('FINALMENTE! Descanso merecido UwU')
}
else {
    console.log('Insira um dia de semana válido')
}

//Switch e Case
let resultadoSelecao = 'lista';

switch (resultadoSelecao) {
    case "aprovada":
        console.log('Parabéns, seja bem-vinda!')
        break;

    case "lista":
        console.log('Aguarde o nosso contato')
        break;

    case "reprovada":
        console.log('Infelizmente não foi dessa vez :(')
        break;

    default:
        console.log('Não se aplica')
}