const check = (numero, x) => numero === x;

const resultado = (numero, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(numero, number) ? 'Parabéns você ganhou!' : 'Tente novamente!';
};

console.log(resultado(2, check));