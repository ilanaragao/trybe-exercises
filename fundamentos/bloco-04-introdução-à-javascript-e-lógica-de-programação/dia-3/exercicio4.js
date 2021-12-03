let n = 5;
let asterisco = '*';
let linha = '';

let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let linhaIndex = 0; linhaIndex <= meio; linhaIndex += 1) {
  for (let colunaIndex = 0; colunaIndex <= n; colunaIndex += 1) {
    if (colunaIndex > esquerda && colunaIndex < direita) {
      linha = linha + asterisco;
    } else {
      linha = linha + ' ';
    }
  }
  console.log(linha);
  linha = '';
  direita += 1;
  esquerda -= 1
};