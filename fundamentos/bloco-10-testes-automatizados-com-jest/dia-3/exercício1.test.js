const service = require('./exercício1.js');

test('testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
  service.randomNumber = jest.fn().mockReturnValue(15);

  expect(service.randomNumber()).toBe(15);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});
