const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach(showEmailList);

const numbers = [19, 21, 60, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find((num) => num % 3 === 0 && num % 5 === 0);

console.log(findDivisibleBy3And5)

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((name) => name.length === 5);
}

console.log(findNameWithFiveLetters());

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  return musicas.find((musica) => musica.id === id);
}

console.log(findMusic('31031685'))