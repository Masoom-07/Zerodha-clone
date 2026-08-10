import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../landing_page/home/Hero';

describe('Hero Component', () => {
  test('renders hero image', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    screen.debug();

    const heroImage = screen.getByAltText(/hero image/i);

    expect(heroImage).toBeInTheDocument();
  });
});