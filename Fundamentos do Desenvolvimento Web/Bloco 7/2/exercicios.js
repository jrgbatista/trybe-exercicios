function verifyInput(value1, value2) {
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Informe apenas números para realizar a soma')
  }
  if (!value1 || !value2) {
    throw new Error('Informe dois valores para realizar a soma');
  }
}
function sum() {
  try {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const result = parseInt(value1) + parseInt(value2);
  verifyInput(value1, value2);
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (err) {
  document.getElementById('result').innerHTML = `Erro: ${err.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}