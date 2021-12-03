import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

describe('Testa a aplicação, e o input', () => {
  it('Testa a adição de vários itens a aplicação', () => {
    const todo = ['Finalizar projeto', 'Estudar conteúdo', 'Beber água'];
    render(<App />);
    const input = screen.getByLabelText('Tarefa:');
    const button = screen.getByText('Adicionar');
    todo.forEach((item) => {
      fireEvent.change(input, { target: { value: item } });
      fireEvent.click(button);
    });
    todo.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  describe('Testa o Componente item', () => {
    it('Ao receber uma string na props ela precisa aparecer na tela.', () => {
      render(<Item content="Limpar a casa" />);
      expect(screen.getByText('Limpar a casa')).toBeInTheDocument();
    });
  });
});
