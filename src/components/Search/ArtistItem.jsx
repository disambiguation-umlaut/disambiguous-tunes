import React from 'react';
import PropTypes from 'prop-types';

const ArtistItem = ({ name, begin, end, disambig }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{begin} - {end}</p>
      <p>{disambig}</p>
    </div>
  );
};

ArtistItem.propTypes = {
  name: PropTypes.string,
  begin: PropTypes.string,
  end: PropTypes.string,
  disambig: PropTypes.string
};

export default ArtistItem;
