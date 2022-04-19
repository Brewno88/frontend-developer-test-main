import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title link', () => {
  render(<App />);
  const titleElement = screen.getByText(/To do App/i);
  expect(titleElement).toBeInTheDocument();
});

test('render Clear All button', () => {
  render(<App />);
  const clearAllButton = screen.getByText(/Clear All/i);
  expect(clearAllButton).toBeInTheDocument();
});
