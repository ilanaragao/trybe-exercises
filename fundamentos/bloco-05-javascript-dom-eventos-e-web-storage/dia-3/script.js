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
  const buttonContainer = document.querySelector(".buttons-container");
  const novoBotao = document.createElement("button");

  novoBotao.innerHTML = botao;
  novoBotao.id = "btn-holiday";
  buttonContainer.appendChild(novoBotao);
}

criarBotao("Feriados");

/* Questão 3 */

function feriados() {
  const botaoFeriado = document.querySelector("#btn-holiday");
  const classFeriados = document.querySelectorAll(".holiday");
  const corDeFundo = "rgb(238,238,238)";
  const novaCor = "purple";

  botaoFeriado.addEventListener("click", function () {
    for (let index = 0; index < classFeriados.length; index += 1) {
      if (classFeriados[index].style.backgroundColor === novaCor) {
        classFeriados[index].style.backgroundColor = corDeFundo;
      } else {
        classFeriados[index].style.backgroundColor = novaCor;
      }
    }
  });
}

feriados();

/* Questão 4 */

function botaoSexta(nome) {
  let botao = document.querySelector(".buttons-container");
  let novoBotao = document.createElement("button");

  novoBotao.innerText = nome;
  novoBotao.id = "btn-friday";
  botao.appendChild(novoBotao);
}

botaoSexta("Sexta-feira");

/* Questão 5 */

function displayFridays(friday) {
  const botaoSexta = document.querySelector('#btn-friday');
  const sextas = document.getElementsByClassName('friday');
  const sextaTexto = 'SEX-TO-U!';

  botaoSexta.addEventListener('click', function() {
  for (let index = 0; index < sextas.length; index += 1) {
    if (sextas[index].innerText !== sextaTexto) {
        sextas[index].innerText = sextaTexto;
    } else {
        sextas[index].innerText = friday[index];
      }
    }
  })
};

const diasSexta = [ 4, 11, 18, 25 ];
displayFridays(diasSexta);

/* Questão 6 */

function zoomDia() {
  const dias = document.querySelector('#days');

  dias.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '25px';
    event.target.style.fontWeight = '900';
  })
};

function semZoom() {
  const dias = document.querySelector('#days');

  dias.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

zoomDia();
semZoom();

/* Questão 7 */

function tarefa(add) {

  const task = document.querySelector('.my-tasks');
  const nome = document.createElement('span');

  nome.innerText = add;
  task.appendChild(nome);
};

tarefa('Atividades da Trybe =');

/* Questão 8 */

function divTarefas(cor) {

  const divTask = document.querySelector('.my-tasks');
  const novaDiv = document.createElement('div');

  novaDiv.className = 'task';
  novaDiv.style.backgroundColor = cor;
  divTask.appendChild(novaDiv);
};

divTarefas('Thistle');

/* Questão 9 */

function novaClasse() {
  const taskSelecionada = document.getElementsByClassName('task selected');
  const minhaTask = document.querySelector('.task');

  minhaTask.addEventListener('click', function(event) {
    if (taskSelecionada.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

novaClasse();

/* Questão 10 */

function selecionarDia() {
  const taskMarcada = document.getElementsByClassName('task selected');
  const dias = document.querySelector('#days');
  const divTask = document.querySelector('.task');
  const cor = divTask.style.backgroundColor;
  
  dias.addEventListener('click', function(event){
    const mudarCor = event.target.style.color;
    if (taskMarcada.length > 0 && mudarCor !== cor) {
      const color = taskMarcada[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (mudarCor === cor && taskMarcada.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

selecionarDia();

/* Bônus */

function compromisso() {
  const input = document.querySelector('#task-input');
  const botao = document.querySelector('#btn-add');
  const lista = document.querySelector('.task-list');

  botao.addEventListener('click', function() {
    if (input.value.length > 0) {
      const tabela = document.createElement('li');
      tabela.innerText = input.value;
      lista.appendChild(tabela);
      input.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && input.value.length > 0) {
      const tabela = document.createElement('li');
      tabela.innerText = input.value;
      lista.appendChild(tabela);
      input.value = '';
    }
  });
};

compromisso();