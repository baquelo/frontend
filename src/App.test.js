import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Marcelo Almeida/i);
  expect(nameElement).toBeInTheDocument();
});
test('renders my name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Marcelo Almeida/i);
  expect(nameElement).toBeInTheDocument();
});