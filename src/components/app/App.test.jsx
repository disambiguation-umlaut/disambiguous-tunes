import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import Header from '../Header/Header';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Header', () => {
    afterEach(() => cleanup());
    it('renders Header', () => {
      const { asFragment } = render(<Header />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
