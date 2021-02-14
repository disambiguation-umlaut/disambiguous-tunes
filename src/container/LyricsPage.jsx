/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Lyrics from '../components/Lyrics/Lyrics';
import { useLyrics } from '../state/hooks';
import styles from './Containers.css';

const LyricsPage = ({ match }) => {
  const { lyrics, loading } = useLyrics(match.params.artist, match.params.title);

  if(loading) return <img className={styles.loading} src="/LoadingSpinner.gif" alt="loading" />;

  return (
    <div className={styles.lyricspage} data-testid="lyrics">
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
