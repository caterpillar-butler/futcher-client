import { render, screen } from '@testing-library/react';
import { Footer } from 'components';
import { BrowserRouter } from 'react-router-dom';

describe('Footer Component', () => {
  test('renders Footer component correctly', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    // Check for links
    expect(screen.getByText('이용약관')).toBeInTheDocument();
    expect(screen.getByText('개인정보처리방침')).toBeInTheDocument();
    expect(screen.getByText('사이트맵')).toBeInTheDocument();

    // Check for social media icons
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();

    // Check for copyright text
    expect(
      screen.getByText(/Copyright 2021 BR Media Inc./i)
    ).toBeInTheDocument();
  });
});
