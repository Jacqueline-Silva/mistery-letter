const inpCartaTexto = document.getElementById('carta-texto');
const pCartaGerada = document.getElementById('carta-gerada');
const btnCriarCarta = document.getElementById('criar-carta');

function geraCarta() {
  const valueInput = inpCartaTexto.value.split(' ');
  while (pCartaGerada.firstChild) {
    pCartaGerada.removeChild(pCartaGerada.firstChild);
  }
  /*
REF: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
     A seleção dos filhos é feita pelo elemento pai.
(while (condição true) {se 'true' execute 'x'} é parecido com if/else para condição e for para repetição)
REF: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
  */
  if (valueInput !== '') {
    for (let palavra = 0; palavra < valueInput.length; palavra += 1) {
      const spanDoP = document.createElement('span');
      spanDoP.innerHTML = valueInput[palavra];
      pCartaGerada.appendChild(spanDoP);
    }
  }
}
btnCriarCarta.addEventListener('click', geraCarta);

function alertaCarta() {
  if (inpCartaTexto.value === '') {
    pCartaGerada.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
}
btnCriarCarta.addEventListener('click', alertaCarta);
/*
const iptReplace = inpCartaTexto.value.replace(/' '/, '');
 || inpCartaTexto.value === iptReplace
*/

function conta() {
  const pContador = document.getElementById('carta-contador');
  const contaFilhos = pCartaGerada.childNodes.length;
  pContador.innerHTML = `${contaFilhos}`;
}
btnCriarCarta.addEventListener('click', conta);
