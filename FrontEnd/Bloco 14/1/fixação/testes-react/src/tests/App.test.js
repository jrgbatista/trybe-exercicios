import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Email from '../components/Email';

// acessar os elementos da tela
// interagir com os elementos (se necessário)
// fazer os testes

describe('Tela de inserção de email', () => {
  test('Verificando se existe o campo Email.', () => {
    render(<Email />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });

  test('Verificando se existem dois botões', () => {
    render(<Email />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  test('Verificando se existe um botão de enviar', () => {
    render(<Email />);
    const btnSend = screen.getByTestId('id-send');
    expect(btnSend).toBeInTheDocument();
    expect(btnSend).toHaveProperty('type', 'button');
    expect(btnSend).toHaveValue('Enviar');
  });
  test('Verificando se o botão e o campo email estão funcionando.', () => {
    render(<Email />);
    const EMAIL_USER = 'email@email.com';
    const textEmail = screen.getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });
});
