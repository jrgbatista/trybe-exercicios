const a = 19;
const b = 20;

// Adição
let adicao = a + b;

// Subtração
let subtracao = a - b;

// Multiplicação
let multiplicacao = a * b;

// Divisão
let divisao = a / b;

// Módulo
let modulo = a % b;

// O maior de dois números

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

// O maior de três números
const c = 12
if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > b) {
  console.log(c);
} else {
  console.log("Número incorreto");
}

// Positivo ou negativo
if (c > 0) {
  console.log('positive');
} else {
  console.log('negative');
}

// É um triângulo?
if (a < 0 || b < 0 || c < 0) {
  console.log(false)
} else if (a + b + c == 180) {
  console.log(true)
} else {
  console.log('anything but a triangle')
}

// Movimentos das peças do Xadrez
let pieceName = ''.toLowerCase();
switch (pieceName) {
  case pieceName = 'pawn':
    console.log("The pawn is the least powerful piece and is worth one point. If it is a pawn's first move, it can move forward one or two squares.If a pawn has already moved, then it can move forward just one square at a time.It attacks(or captures) each square diagonally to the left or right.");
    break;
  case pieceName = 'bishop':
    console.log("The bishop is considered a minor piece (like a knight) and is worth three points. A bishop can move diagonally as many squares as it likes, as long as it is not blocked by its own pieces or an occupied square.");
    break;
  case pieceName = 'knight':
    console.log("The knight is considered a minor piece (like a bishop) and is worth three points. The knight is the only piece in chess that can jump over another piece! It moves one square left or right horizontally and then two squares up or down vertically, OR it moves two squares left or right horizontally and then one square up or down vertically—in other words, the knight moves in an 'L-shape.'");
    break;
  case pieceName = 'rook':
    console.log("The rook is considered a major piece (like the queen) and is worth five points. It can move as many squares as it likes left or right horizontally, or as many squares as it likes up or down vertically (as long as it isn't blocked by other pieces).");
    break;
  case pieceName = 'queen':
    console.log("The queen is considered a major piece (like a rook) and is worth nine points. It can move as many squares as it likes left or right horizontally, or as many squares as it likes up or down vertically (like a rook). The queen can also move as many squares as it likes diagonally (like a bishop).");
    break;
  case pieceName = 'king':
    console.log("The king is not a very powerful piece, as it can only move (or capture) one square in any direction.");
    break;
  default:
    console.log('Insert a valid piece name')
}

// Conversor de notas
let percentage = 90;
let score = '';
switch (percentage) {
  case percentage >= 90 && percentage <= 100:
    score = 'A';
    console.log('Congratulations! Your score is: ' + score);
    break;
  case percentage >= 80:
    score = 'B';
    console.log('Very good! Your score is: ' + score);
    break;
  case percentage >= 70:
    score = 'C';
    console.log('Good. Your score is: ' + score);
    break;
  case percentage >= 60:
    score = 'D';
    console.log('Keep trying! Your score is: ' + score);
    break;
  case percentage >= 50:
    score = 'E';
    console.log('Please be careful about your studies! Your score is: ' + score);
    break;
  case percentage < 50 && percentage > 0:
    score = 'F';
    console.log('Not this time =( Your score is: ' + score);
    break;
  default:
    console.log('Not applicable')
}