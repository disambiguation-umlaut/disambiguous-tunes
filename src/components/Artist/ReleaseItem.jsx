/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Release.css';


const ReleaseItem = ({ release }) => {
  
  return (
    <div className={styles.release}>
      <h2 className={styles.releaseTitle}>{release.title}</h2>
      {
        release.cover 
          ? 
          <img 
            src={`http://coverartarchive.org/release/${release.id}/front`} 
            alt={release.title} />
          :
          <img
            src="/musicPlaceholder.jpg"
            alt="No Album Cover Found" />
      }
      <p>{release.date}</p>
    </div>
  );
};

ReleaseItem.propTypes = {
  release: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string, 
        id: PropTypes.string,
        cover: PropTypes.boolean,
        date: PropTypes.string
      }
    ))
};


export default ReleaseItem;
