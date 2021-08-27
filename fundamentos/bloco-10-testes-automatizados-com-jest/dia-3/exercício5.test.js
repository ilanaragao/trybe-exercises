const service = require('./exercício5');

describe('testando implementações', () => {
  test('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    const firstTest = jest
      .spyOn(service, 'first')
      .mockImplementation((a) => a.toLowerCase());

    expect(firstTest('UPPERCASE')).toBe('uppercase');
    expect(firstTest).toHaveBeenCalled();
    expect(firstTest).toHaveBeenCalledTimes(1);
    expect(firstTest).toHaveBeenCalledWith('UPPERCASE');

    service.first.mockRestore();

    expect(service.first('lowercase')).toBe('LOWERCASE');
  });
});
