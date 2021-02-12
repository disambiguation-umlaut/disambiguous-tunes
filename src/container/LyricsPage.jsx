/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Lyrics from '../components/Lyrics/Lyrics';
import { useLyrics } from '../state/hooks';

const LyricsPage = ({ match }) => {
  const { lyrics, loading } = useLyrics(match.params.artist, match.params.title);

  console.log(lyrics);

  if(loading) return <p>Loading</p>;

  return (
    <div>
      <Lyrics lyrics={lyrics.lyrics} />
    </div>
  );
};

LyricsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default LyricsPage;
