import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArtistItem from './ArtistItem';

const ArtistList = ({ artists }) => {
  const artistElements = artists.map(artist => {
    <div key={artist.id}>
      <Link to={`/artist/${artist.id}`}>
        <ArtistItem
          artist={artist}
        />
      </Link>
    </div>;
  });

  return (
    <div data-testid="artists">
      {artistElements}
    </div>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
        begin: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
        disambig: PropTypes.string.isRequired
      }
    )).isRequired
};

export default ArtistList;
