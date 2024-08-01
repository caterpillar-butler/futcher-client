import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders App Dashboard link', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Welcome to the dashboard!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders App NotFound link', () => {
  render(
    <MemoryRouter initialEntries={['/not-found']}>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/페이지를 찾을 수 없습니다./i);
  expect(linkElement).toBeInTheDocument();
});
