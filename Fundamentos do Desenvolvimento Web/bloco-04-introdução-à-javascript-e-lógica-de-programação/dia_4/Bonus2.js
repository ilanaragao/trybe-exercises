let vetor = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vetor) {
  let result = [];
  for (let index = 0; index < vetor.length; index += 1) {
    let numeros = vetor[index];
    for (let key = 0; key < numeros.length; key += 1) {
      let current = numeros[key];
      if ((current % 2) === 0) {
        result.push(current);
      } 
    }
  }
  return result;
}

console.log(arrayOfNumbers(vetor));