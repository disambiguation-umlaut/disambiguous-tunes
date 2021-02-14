import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArtistItem from './ArtistItem';
import styles from './Artist.css';

const ArtistList = ({ artists }) => {
  const artistElements = artists.map(artist => (
    <div key={artist.id}>
      <Link to={`/artist/${artist.name}/${artist.id}`}>
        <ArtistItem
          {...artist}
        />
      </Link>
    </div>
  ));

  return (
    <div className={styles.artists}data-testid="artists">
      {artistElements}
    </div>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape(
      {
        name: PropTypes.string,
        begin: PropTypes.string,
        end: PropTypes.string,
        disambig: PropTypes.string
      }
    ))
};

export default ArtistList;
