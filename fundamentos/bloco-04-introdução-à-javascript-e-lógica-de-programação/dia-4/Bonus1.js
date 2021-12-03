function numeroRomano(numero) {
  let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let array = [];
  let result = 0;

  for (let indice in numero) {
    array[indice] = romanos[numero[indice]];
  }

  for (let indice in array) {
    if (array[indice] < array[indice + 1]) {
      array[indice + 1] = array[indice + 1] - array[indice];
    } else {
      result += array[indice];
    }
  }

  return result;
}

console.log(numeroRomano("MMXVIII"));