import React from 'react';
import PropTypes from 'prop-types';

const Song = ({ lyrics }) => (
  <div>
    <p>{lyrics}</p>  
  </div>
);

Song.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default Song;
