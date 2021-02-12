/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';


const ReleaseItem = ({ release }) => {

  
  return (
    <div>
      <h2>{release.title}</h2>
      {
        release.cover ? <img src={`http://coverartarchive.org/release/${release.id}/front`} alt={release.title} />
          : <p>no cover available</p>
      }
      <p>{release.date}</p>
    </div>
  );
};

ReleaseItem.propTypes = {
  release: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired, 
        id: PropTypes.string.isRequired,
        cover: PropTypes.boolean.isRequired,
        date: PropTypes.string.isRequired
      }
    )).isRequired
};


export default ReleaseItem;
