/* Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula */

const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  return names.reduce((acc, value) => acc + value.split('').reduce((acumulador, valor) => {
        if (valor === 'a' || valor === 'A') return acumulador + 1;
        return acumulador;
      }, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);
