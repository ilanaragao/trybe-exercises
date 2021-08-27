/* Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar. */

const first = (str) => str.toUpperCase();
const second = (str) => str.charAt(0);
const third = (str1, str2) => str1.concat(str2);

module.exports = {
  first,
  second,
  third,
};
