function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

/* Questão 1 */

const listaDias = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function diasDoMes() {
  const listaDeDias = document.querySelector("#days");

  for (let index = 0; index < listaDias.length; index += 1) {
    const day = listaDias[index];
    const dayItem = document.createElement("li");

    if ((day === 24) | (day === 31)) {
      dayItem.className = "day holiday";
      dayItem.innerHTML = day;
      listaDeDias.appendChild(dayItem);
    } else if ((day === 4) | (day === 11) | (day === 18)) {
      dayItem.className = "day friday";
      dayItem.innerHTML = day;
      listaDeDias.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = "day holiday friday";
      dayItem.innerHTML = day;
      listaDeDias.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = "day";
      listaDeDias.appendChild(dayItem);
    }
  }
}
diasDoMes();

/* Questão 2 */

function criarBotao(botao) {
  const buttonContainer = document.querySelector('.buttons-container');
  const novoBotao = document.createElement('button');

  novoBotao.innerHTML = botao;
  novoBotao.id = 'btn-holiday';
  buttonContainer.appendChild(novoBotao);
};

criarBotao('Feriados');

/* Questão 3 */

function feriados() {
  const botaoFeriado = document.querySelector('#btn-holiday');
  const classFeriados = document.querySelectorAll('.holiday')
  const corDeFundo = 'rgb(238,238,238)';
  const novaCor = 'purple';

  botaoFeriado.addEventListener('click', function() {
    for (let index = 0; index < classFeriados.length; index += 1) {
      if (classFeriados[index].style.backgroundColor === novaCor) {
        classFeriados[index].style.backgroundColor = corDeFundo;
      } else {
        classFeriados[index].style.backgroundColor = novaCor;
      }
    }
  })
};

feriados();