import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ lyrics }) => (
  <div data-testid="lyrics">
    <p>{lyrics}</p>  
  </div>
);

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default Lyrics;
