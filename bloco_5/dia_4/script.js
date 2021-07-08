/* Questão 1 */

const corFundo = document.querySelector("#select-back");
corFundo.addEventListener("change", function () {
  const cor = corFundo.selectedOptions[0];
  document.body.style.backgroundColor = cor.value;

  localStorage.setItem('background-color', cor.value)
});

const backgroundSalvo = localStorage.getItem('background-color');
document.body.style.backgroundColor = backgroundSalvo

/* Questão 2 */

const corLetra = document.querySelector("#select-color");
corLetra.addEventListener("change", function () {
  const mudaCor = corLetra.selectedOptions[0];
  document.body.style.color = mudaCor.value;

  localStorage.setItem('font-color', mudaCor.value)
});

const corSalva = localStorage.getItem('font-color');
document.body.style.color = corSalva;

/* Questão 3 */

const tamanhoFonte = document.querySelector('input[name="tamanho-fonte"]');
tamanhoFonte.addEventListener('change', function () {
    const p = document.querySelector('p');
    p.style.fontSize = `${tamanhoFonte.value}px`;

    localStorage.setItem('font-size', `${tamanhoFonte.value}px`);
})

const tamanhoSalvo = localStorage.getItem('font-size');
const p = document.querySelector('p');
p.style.fontSize = tamanhoSalvo;

/* Questão 3 */

const tamanhoLinha = document.querySelector('input[name="tamanho-linha"]');
tamanhoLinha.addEventListener('change', function () {
  const paragrafo = document.querySelector('p');
  paragrafo.style.lineHeight = `${tamanhoLinha.value}px`;

  localStorage.setItem('line-height', `${tamanhoLinha.value}px`);
})

const linhaSalva = localStorage.getItem('line-height');
const linha = document.querySelector('p');
p.style.lineHeight = linhaSalva;