/* 1 - Teste se o retorno de sum(4, 5) é 9 */

const sum = require('./sum');

describe(`Teste para a função 'sum':`, () => {
  it('4 mais 5 é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  /* 2 - Teste se o retorno de sum(0, 0) é 0 */
  it('0 mais 0 é igual 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});