/* Fixação 1 */

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
people.sort((x, y) => x.age - y.age);

console.log(people);

/* Fixação 2 */

people.sort((x, y) => y.age - x.age);

console.log(people);
