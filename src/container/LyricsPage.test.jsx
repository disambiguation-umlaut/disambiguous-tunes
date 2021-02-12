/* eslint-disable max-len */
global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LyricsPage from './LyricsPage';
import lyricsApi from '../fixtures/lyricsApi.json';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://api.lyrics.ovh/v1/', (req, res, ctx) => {
    return res(ctx.json(lyricsApi));
  })
);

describe('LyricsPage container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays lyrics', async() => {
    render(
      <MemoryRouter>
        <LyricsPage match={{ params: { artist: 'Blue Oyster Cult', title: 'Baby Ice Dog' } }} />
      </MemoryRouter>
    );

    screen.getByText('Loading');

    const lyrics = await screen.findByTestId('lyrics');

    return waitFor(() => {
      expect(lyrics).not.toBeEmptyDOMElement();
    });
  });
});
