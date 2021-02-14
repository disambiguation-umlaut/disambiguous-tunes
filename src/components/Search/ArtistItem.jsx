import React from 'react';
import PropTypes from 'prop-types';
import styles from './Artist.css';

const ArtistItem = ({ name, begin, end, disambig }) => {
  return (
    <div className={styles.artist}>
      <h3>{name}</h3>
      { begin === 'N/A'
        ? <br />
        : <p>{begin} - {end}</p>
      }
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
