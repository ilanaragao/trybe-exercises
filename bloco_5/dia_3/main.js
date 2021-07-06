const divUm = document.getElementById("divUm");
const divDois = document.getElementById("divDois");
const divTres = document.getElementById("divTres");
const input = document.getElementById("input");
const myWebpage = document.getElementById("mySpotrybefy");

/* Questão 2 */

function mudarClasse(event) {
  const techClass = document.querySelector('.tech');
  techClass.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

divUm.addEventListener('click', mudarClasse);
divDois.addEventListener('click', mudarClasse);
divTres.addEventListener('click', mudarClasse);

/* Questão 3 */

input.addEventListener('input', (event) => {
  const techClasse = document.querySelector('.tech');
  techClasse.innerText = event.target.value;
});