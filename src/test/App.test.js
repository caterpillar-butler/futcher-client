import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App Dashboard link', () => {
  window.history.pushState({}, 'Test Dashboard page', '/');
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the dashboard!/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders App NotFound link', () => {
  window.history.pushState({}, 'Test NotFound page', '/not-found');
  render(<App />);
  const linkElement = screen.getByText(/페이지를 찾을 수 없습니다./i);
  expect(linkElement).toBeInTheDocument();
});
