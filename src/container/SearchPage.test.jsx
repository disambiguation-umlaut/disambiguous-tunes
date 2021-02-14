/* eslint-disable max-len */
// eslint-disable-next-line no-undef
global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchPage from './SearchPage';
import blueApi from '../fixtures/blueApi.json';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://musicbrainz.org/ws/2/artist', (req, res, ctx) => {
    return res(ctx.json(blueApi));
  })
);

describe('SearchPage container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays a list of artists', async() => {
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    screen.getByAltText('loading');

    const listOfArtists = await screen.findByTestId('artists');

    return waitFor(() => {
      expect(listOfArtists).not.toBeEmptyDOMElement();
    });
  });
});

