function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject('Utilizar apenas números');

    const result = (a + b) * c;

    if (result < 50) {
      return reject('Valor abaixo de 50');
    }

    return resolve(result);
  });
}

doMath(10, 20, 5)
  .then((resolve) => console.log(resolve + ';'))
    .catch((error) => console.log(error + ';'));

doMath(1, 1, 'a')
  .then((resolve) => console.log(resolve + ';'))
    .catch((error) => console.log(error + ';'));

doMath(1, 1, 1)
  .then((resolve) => console.log(resolve + ';'))
    .catch((error) => console.log(error + ';'));
