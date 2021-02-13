/* eslint-disable no-undef */
/* eslint-disable max-len */
global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ArtistPage from './ArtistPage';
import blueReleaseApi from '../fixtures/blueReleaseApi.json';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://musicbrainz.org/ws/2/release', (req, res, ctx) => {
    return res(ctx.json(blueReleaseApi));
  })
);

describe('ArtistPage container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and display a list of releases', async() => {
    render(
      <MemoryRouter>
        <ArtistPage 
          match={{ params: { id: '3ce0a4ca-7e5a-44bf-bffe-913cd1461771', name: 'Andrew' } }}
        />
      </MemoryRouter>
    );

    const listOfReleases = await screen.findByTestId('releases');

    return waitFor(() => {
      expect(listOfReleases).not.toBeEmptyDOMElement();
    });
  });
});

