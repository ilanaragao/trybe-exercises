const respostasCertas = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostaEstudante = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const contagem = (certas, erradas, callback) => {
  let contador = 0;
  for (let index = 0; index < certas.length; index += 1) {
    const retorno = callback(certas[index], erradas[index]);
    contador += retorno;
  }
  return `Resultado final: ${contador} corretas`;
};

console.log(contagem(respostasCertas, respostaEstudante, (right, wrong) => {
  if (right === wrong) {
    return 1;
  } if (wrong === 'N.A') {
    return 0;
  }
  return -0.5;
}));