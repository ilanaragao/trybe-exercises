/* Exercício 1 */

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

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function callDoMath() {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

  try {
    const result = await doMath(...randomNumbers);
    console.log(randomNumbers);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

callDoMath();
