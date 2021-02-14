import React from 'react';
import PropTypes from 'prop-types';
import './Lyrics.css';

const Lyrics = ({ lyrics }) => {

  if(lyrics === '') return <p>No Lyrics Found</p>;

  return (
    <div>
      <p>{lyrics}</p>  
    </div>
  );
};

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default Lyrics;
