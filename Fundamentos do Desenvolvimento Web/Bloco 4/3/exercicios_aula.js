let num = 0
for (let i = 2; i <= 150; i += 1) {
  if (i % 3 === 0) {
    // console.log(i)
    num += 1;
    // console.log(num)
    if (num === 50) {
      console.log('mensagem secreta');
    } else {
      console.log(controle);
    }
  }
}