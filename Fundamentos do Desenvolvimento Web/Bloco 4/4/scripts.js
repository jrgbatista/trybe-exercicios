//Objetos

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

// console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.")
console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`)

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
player['fullName'] = player.name + ' ' + player.lastName;

console.log(`A jogadora ${player.fullName} foi eleita a melhor do mundo por ${Object.values(player.bestInTheWorld).length} vezes.`);
console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`);

//For/in
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
};

for (person in names) {
    console.log('Olá, ' + names[person] + '!')
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (key in car) {
    console.log(key, car[key])
}

//Funções

// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
    console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
        return primeiroNum + ' é maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
        return segundoNum + ' é maior que ' + primeiroNum;
    } else {
        return 'Os números são iguais';
    }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais