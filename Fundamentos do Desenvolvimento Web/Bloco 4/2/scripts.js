//Arrays
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio');
console.log("O índice de 'Portfólio'é " + indexOfPortfolio + ".")

menu.push('Contato')
console.log(menu)

//For
for (let i = 0; i < menu.length; i += 1) {
    console.log(menu[i]);
}

// console.log("");

let grocerylist = ['Arroz', 'Feijão', 'Alface', 'Melancia']

for (let i = 0; i < grocerylist.length; i += 1) {
    console.log(grocerylist[i]);
}

// console.log("");

let numero = 9;
for (let contador = 0; contador <= 9; contador += 1) {
    // console.log("");
    console.log(numero * contador);
}

let listaDeNomes = ['João', 'Maria', 'Luisa', 'Marta', 'Jones', 'Carlos']
for (let pessoa = 0; pessoa < listaDeNomes.length; pessoa += 1) {
    const mensagem = "Boas vindas, " + listaDeNomes[pessoa] + "!"
    console.log(mensagem);
}

//For/of
let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
    console.log(numero);
}

let word = "Hello";
for (let letter of word) {
    console.log(letter);
}

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
    sum += 1;
    console.log(sum)
}

for (let nome of listaDeNomes) {
    console.log(nome)
}