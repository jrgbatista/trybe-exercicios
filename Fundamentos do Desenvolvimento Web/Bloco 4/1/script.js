// variáveis

const myName = "Jorge";
const birthCity = "São Paulo";
let birthYear = "1994";
console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = "2030"
console.log(birthYear);

// Tipos primitivos, tipagem dinâmica e operações aritméticas

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

const base = 5;
let height = 8;
const area = base * height;
console.log(area)

const perimeter = base + height;
console.log(perimeter)

// Condições if e else

const nota = "93";
let resultado = '';
if (nota >= 80) {
  resultado = 'aprovada'
} else if (nota < 80 && nota >= 60) {
  resultado = 'lista'
} else {
  resultado = 'reprovada'
}

// Operadores lógicos

const currentHour = 21;
let message = "";
if (currentHour >= 22 || currentHour < 4 && currentHour > -1) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!";
} else if (currentHour >= 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém passado";
} else {
  message = "Insira um horário válido";
}
console.log(message)

// Operador OR

let weekDay = "quarta-feira"
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
  console.log("Oba! Mais um dia de aprendizado na Trybe >:D");
} else if (weekDay === "sábado" || weekDay === "domingo") {
  console.log("FINALMENTE, descanso merecido UwU");
} else {
  console.log("Insira um dia da semana válido");
}

// Switch e Case

let estadoProcSeletiv = resultado;
switch (estadoProcSeletiv) {
  case resultado = 'aprovada':
    console.log("Parabéns, você foi aprovado(a)!");
    break;
  case resultado = 'lista':
    console.log("Você está na nossa lista de espera");
    break;
  case resultado = 'reprovada':
    console.log("Você foi reprovado");
    break;
  default:
    console.log('Não se aplica')
}