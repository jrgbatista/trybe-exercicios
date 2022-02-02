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

const nota = "62";
if (nota >= 80) {
  console.log("Parabéns, você foi aprovado(a)!")
} else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera")
} else {
  console.log("Você foi reprovado")
}

// Operadores lógicos

const currentHour = 1;
let message = "";
if (currentHour >= 22) {
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
  message = "Não deveríamos comer nada, é hora de dormir";
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

let estadoProcSeletiv = ""
