function maiorNome(nome) {
  let maior = nome[0];
  for (let index in nome){
    if (maior.length < nome[index].length) {
      maior = nome[index];
    }
  }
  return maior;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));