/* 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem. */

const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

describe('Resultado das promises:', () => {
  describe('Quando existe um id cadastrado.', () => {
    it('Retorna o nome:', () => (
      getUserName(1).then((data) => expect(data).toEqual('Mark'))
    ));
  });

  describe('Quando não existe id cadastrado:', () => {
    it('Retorna um erro.', () => {
      expect.assertions(1);
      return getUserName(3).catch((error) =>
        expect(error.message).toMatch('User with 3 not found.'));
    });
  });
});