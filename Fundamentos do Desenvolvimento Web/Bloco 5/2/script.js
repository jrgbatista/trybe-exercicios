// buscando elementos
document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'red';
document.querySelector('#elementoOndeVoceEsta').firstElementChild.innerText = 'primeiro texto aleatório com o intuito de testar se isso aqui está funcionando adequadamente.'
document.querySelector('#pai').firstElementChild.nextElementSibling;
document.querySelector('#pai').firstElementChild.nextElementSibling.firstElementChild;

// criando elementos
let buscarElemento = document.querySelector('#elementoOndeVoceEsta');

let novoElemento = document.createElement('h1');
novoElemento.innerText = 'H1 criado com JavaScript';
novoElemento.style.color = 'blue';

buscarElemento.appendChild(novoElemento);

// removendo elementos
let removeSon = novoElemento;
if (removeSon.innerText.includes('criado')) {
  buscarElemento.removeChild(removeSon);
}