import { render, screen } from '@testing-library/react';
import App from './App';

// comentando para testar
// test('renders learn react link', () => {
//  render(<App />);
//  const linkElement = screen.getByText(/learn react/i);
//  expect(linkElement).toBeInTheDocument();
//});


test('App renderiza Login', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /acessar/i })).toBeInTheDocument();
});
