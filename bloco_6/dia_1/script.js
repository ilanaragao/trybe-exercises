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
estados();