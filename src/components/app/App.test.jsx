import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import blueReleaseApi from '../../fixtures/blueReleaseApi.json';
import App from './App';
import Header from '../Header/Header';
import ReleaseItem from '../Artist/ReleaseItem';
import ReleaseList from '../Artist/ReleaseList';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Header', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders ReleaseList', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ReleaseList 
          releases={blueReleaseApi.releases} 
          artist={'Blue Blue Blue'}/>
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

});
