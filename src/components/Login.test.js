import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { verificaUsuario } from '../utils/auth';

test('Login renderiza corretamente', () => {
  render(<Login />);
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /acessar/i })).toBeInTheDocument();
});

test('campo email atualiza corretamente', () => {
  render(<Login />);
  const inputEmail = screen.getByLabelText(/email/i);
  fireEvent.change(inputEmail, { target: { value: 'teste@exemplo.com' } });
  expect(inputEmail.value).toBe('teste@exemplo.com');
});

test('campo senha atualiza corretamente', () => {
  render(<Login />);
  const inputSenha = screen.getByLabelText(/senha/i);
  fireEvent.change(inputSenha, { target: { value: '123456' } });
  expect(inputSenha.value).toBe('123456');
});

test('clicar no botão acessar chama função onLogin', () => {
  const mockLogin = jest.fn();
  render(<Login onLogin={mockLogin} />);
  const button = screen.getByRole('button', { name: /acessar/i });
  fireEvent.click(button);
  expect(mockLogin).toHaveBeenCalledTimes(1);
});

test('verificaUsuario retorna true se dados corretos', () => {
  const usuario = { email: 'teste@exemplo.com', senha: '123456' };
  expect(verificaUsuario('teste@exemplo.com', '123456', usuario)).toBe(true);
});

test('verificaUsuario retorna false se dados incorretos', () => {
  const usuario = { email: 'teste@exemplo.com', senha: '123456' };
  expect(verificaUsuario('teste@exemplo.com', '000000', usuario)).toBe(false);
});
