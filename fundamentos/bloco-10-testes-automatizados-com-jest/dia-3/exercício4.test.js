const service = require('./exercício4');
jest.mock('./exercício4');

describe('testando implementações', () => {
  test('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    service.first.mockImplementation((a) => a.toLowerCase());

    expect(service.first('UPPERCASE')).toBe('uppercase');
    expect(service.first).toHaveBeenCalled();
    expect(service.first).toHaveBeenCalledTimes(1);
    expect(service.first).toHaveBeenCalledWith('UPPERCASE');
  });

  test('mockando função que recebe um parâmetro e retorna a última letra', () => {
    service.second.mockImplementation((a) => a.charAt(a.length - 1));

    expect(service.second('letter')).toBe('r');
    expect(service.second).toHaveBeenCalled();
    expect(service.second).toHaveBeenCalledTimes(1);
    expect(service.second).toHaveBeenCalledWith('letter');
  });

  test('mockando função que recebe 3 parâmetros e os concatena', () => {
    service.third.mockImplementation((a, b, c) => a.concat(b, c));

    expect(service.third('tr', 'y', 'be')).toBe('trybe');
    expect(service.third).toHaveBeenCalled();
    expect(service.third).toHaveBeenCalledTimes(1);
    expect(service.third).toHaveBeenCalledWith('tr', 'y', 'be');
  });
});
