function maiorIndice(numero) {
  let indiceMaior = 0;
  for (let indice in numero){
    if (numero[indiceMaior] < numero[indice]) {
      indiceMaior = indice;
    }
  }  
  return indiceMaior;
}

console.log(maiorIndice([2, 3, 6, 7, 10, 1]));