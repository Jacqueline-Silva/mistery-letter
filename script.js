const inpCartaTexto = document.getElementById('carta-texto');
const pCartaGerada = document.getElementById('carta-gerada');
const btnCriarCarta = document.getElementById('criar-carta');

const arrayEstilo = ['newspaper', 'magazine1', 'magazine2'];
const arrayTamanho = ['medium', 'big', 'reallybig'];
const arrayRotacao = ['rotateleft', 'rotateright'];
const arrayInclinacao = ['skewleft', 'skewright'];

function geraCarta() {
  const valueInput = inpCartaTexto.value.split(' ');
  while (pCartaGerada.firstChild) {
    pCartaGerada.removeChild(pCartaGerada.firstChild);
  }

  if (inpCartaTexto.value === '' || !inpCartaTexto.value.trim()) {
    pCartaGerada.innerHTML = '<em>Por favor, digite o conteúdo da carta.</em>';
  }

  for (let palavra = 0; palavra < valueInput.length; palavra += 1) {
    const spanDoP = document.createElement('span');
    spanDoP.innerHTML = valueInput[palavra];
    spanDoP.classList.add(arrayEstilo[Math.floor(Math.random() * 3)]);
    spanDoP.classList.add(arrayTamanho[Math.floor(Math.random() * 3)]);
    spanDoP.classList.add(arrayRotacao[Math.floor(Math.random() * 2)]);
    spanDoP.classList.add(arrayInclinacao[Math.floor(Math.random() * 2)]);
    pCartaGerada.appendChild(spanDoP);
  }
}
btnCriarCarta.addEventListener('click', geraCarta);

/*
REF: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild

REF: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while > A seleção dos filhos é feita pelo elemento pai.
(while (condição true) {se 'true' execute 'x'} é parecido com if/else para condição e for para repetição).

REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim  > usado para remover espaços em branco.
*/

function conta() {
  const pContador = document.getElementById('carta-contador');
  const contaFilhos = pCartaGerada.childNodes.length;
  pContador.innerHTML = `${contaFilhos}`;
}
btnCriarCarta.addEventListener('click', conta);
