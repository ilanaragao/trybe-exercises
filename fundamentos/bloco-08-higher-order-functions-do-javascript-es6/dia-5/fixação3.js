/* Do jeito que está, quando passamos person para a função getNationality o retorno é João is undefined . Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian . */

const getNationality = ({ firstName, lastName, nationality = 'Brazilian' }) =>
  `${firstName} ${lastName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const { nationality = 'Brazilian' } = person;

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person)); // João is Brazilian
