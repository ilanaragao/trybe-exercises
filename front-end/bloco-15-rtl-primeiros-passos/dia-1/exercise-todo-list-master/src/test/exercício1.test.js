import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    expect(screen.getByText('Adicionar')).toBeInTheDocument();
    expect(screen.getByText('Adicionar').type).toBe('button');
  });

  test('Verifica se ao ser clicado é adicionado o que o usuário digitou', () => {
    render(<App />);
    const input = screen.getByLabelText('Tarefa:');
    const button = screen.getByText('Adicionar');
    fireEvent.change(input, { target: { value: 'Beber agua!' } });
    expect(screen.queryByText('Beber agua!')).not.toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText('Beber agua!')).toBeInTheDocument();
  });
});
