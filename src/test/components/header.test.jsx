import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';

describe('Header Component', () => {
  test('renders Header component correctly', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // Check for logo link
    expect(screen.getByText('FoodieFinder')).toBeInTheDocument();

    // Check for text content
    expect(screen.getByText('미식가들의 천국,')).toBeInTheDocument();
    expect(
      screen.getByText('당신만의 숨겨진 맛집을 찾아드립니다!')
    ).toBeInTheDocument();
  });
});
