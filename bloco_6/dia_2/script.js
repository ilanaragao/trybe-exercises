const uf = document.getElementById("estado");
const nomeEstados = [
  "AC",
  "AL",
  "AM",
  "AP",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MG",
  "MS",
  "MT",
  "PA",
  "PB",
  "PE",
  "PI",
  "PR",
  "RJ",
  "RN",
  "RO",
  "RR",
  "RS",
  "SC",
  "SE",
  "SP",
  "TO",
];

function estados() {
  for (let index = 0; index < nomeEstados.length; index += 1) {
    const criaEstados = document.createElement("option");
    uf.appendChild(criaEstados).innerText = nomeEstados[index];
    uf.appendChild(criaEstados).value = nomeEstados[index];
  }
}

function validar(event) {
  event.preventDefault();
}

window.onload = function () {
  estados();

  const botaoEnviar = document.querySelector("#enviar");
  botaoEnviar.addEventListener("click", validar);
};

const picker = new Pikaday({
  field: document.getElementById("datepicker"),
  format: "D/M/YYYY",
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split("/");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  },
});
