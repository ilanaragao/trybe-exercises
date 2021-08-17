/* 1 - Teste se o retorno de sum(4, 5) é 9 */

const sum = require('./sum');

describe(`Teste para a função 'sum':`, () => {
  test('4 mais 5 é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
});
