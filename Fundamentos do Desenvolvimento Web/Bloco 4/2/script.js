// Arrays

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// Legal, né!? Repare que o método .push() adiciona um novo item no final do array. Se precisarmos adicionar no início, podemos usar o .unshift() . Teste em seu console e veja o resultado.

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]

// O método .pop() nos permite remover o último item do array. Agora, se precisarmos remover o primeiro item da lista, podemos usar o .shift() . Faça em seu console e veja o resultado.

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// 1

// For loop

let cars = ['Saab', 'Volvo', 'BMW'];

console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}