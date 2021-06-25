let n = 5;
let asterisco = '*';
let linha = '';
let posicao = n;

for (let linhaIndex = 0; linhaIndex < n; linhaIndex += 1) {
  for (let colunaIndex = 0; colunaIndex <= n; colunaIndex += 1) {
    if (colunaIndex < posicao) {
      linha = linha + ' ';
    } else {
      linha = linha + asterisco;
    }
  }
  console.log(linha);
  linha = '';
  posicao -= 1;
};