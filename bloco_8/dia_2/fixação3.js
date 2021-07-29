const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (array, nome) => {
  //Adicione seu código aqui
  return array.some((nomeAtual) => nomeAtual === nome);
};

console.log(hasName(names, 'Ana'));
