function menorIndice(numero) {
  let indiceMenor = 0;
  for (let indice in numero){
    if (numero[indiceMenor] > numero[indice]) {
      indiceMenor = indice;
    }
  }  
  return indiceMenor;
}

console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));