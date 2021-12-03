// Crie uma função que retorne a string 'Acordando!!';
const acordar = () => 'Acordando!!';

// Crie outra função que retorne a string 'Bora tomar café!!';
const cafe = () => 'Bora tomar café!!';

// Crie mais uma função que retorne a string 'Partiu dormir!!';
const dormir = () => 'Partiu dormir!!';

// Agora desenvolva uma _HOF_ chamada `doingThings` e configure esta função
// para que imprima no console o resultado da execução das funções que você
// criou nos exemplos anteriores.
const doingThings = (param) => {
  const result = param();
  console.log(result);
};

doingThings(acordar);
doingThings(cafe);
doingThings(dormir);