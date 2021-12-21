let inpCartaTexto = document.getElementById('carta-texto');
let pCartaGerada = document.getElementById('carta-gerada');
let btnCriarCarta = document.getElementById('criar-carta');

function geraCarta() {
  let valueInput = inpCartaTexto.value.split(' ');
  if (valueInput !== '') {
    for (let palavra in valueInput) {
      let spanDoP = document.createElement('span');
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
