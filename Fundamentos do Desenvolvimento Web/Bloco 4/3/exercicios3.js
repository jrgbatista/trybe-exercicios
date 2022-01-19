//retorne o fatorial(!) de 10
let num = 7;
let fatorial = 1; //Fatorial é a multiplicação de um número natural e inteiro pelos seus antecessores, exceto o zero.

for (i = 1; i <= num; i += 1) {
    fatorial *= i;
}
console.log(fatorial);

//inverta a palavra
let word = 'tryber';
word = word.split('').reverse().join('');
console.log(word);

//retorne a maior e a menor palavra da array em dois algoritmos
let array = ['java', 'javascript', 'python', 'html', 'css'];



//encontre o maior número primo entre 0 e 50
