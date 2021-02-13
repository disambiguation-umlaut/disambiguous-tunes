/* eslint-disable max-len */
/* eslint-disable no-undef */
global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ReleasePage from './ReleasePage';
import blueRecordingApi from '../fixtures/blueRecordingApi.json';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('http://musicbrainz.org/ws/2/recording', (req, res, ctx) => {
    return res(ctx.json(blueRecordingApi));
  })
);

describe('ReleasePage container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and display a list of releases', async() => {
    render(
      <MemoryRouter>
        <ReleasePage match={{ params: { id: '12503eef-7fca-4322-9012-2057995aaba7' } }} />
      </MemoryRouter>
    );

    const listOfRecordings = await screen.findByTestId('recordings');

    return waitFor(() => {
      expect(listOfRecordings).not.toBeEmptyDOMElement();
    });
  });
});
