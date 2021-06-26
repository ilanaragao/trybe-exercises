let n = 7;
let asterisco = '*';

let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let indexLinha = 1; indexLinha <= meio; indexLinha += 1) {
  let linha = '';
  for (let indexColuna = 1; indexColuna <= n; indexColuna += 1) {
    if (indexColuna == esquerda || indexColuna == direita || indexLinha == meio) {
      linha += asterisco;
    } else {
      linha += ' ';
    }
  }
  esquerda -= 1;
  direita += 1;
  console.log(linha);
}