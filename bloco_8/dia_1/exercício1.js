const newEmployees = (empregado) => {
  const employees = {
    id1: empregado('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: empregado('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: empregado('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const empregado = (nomecompleto) => {
  const email = nomecompleto.toLowerCase().split(' ').join('_');

  return { nomecompleto, email: `${email}@betrybe.com` };
};

console.log(newEmployees(empregado));
