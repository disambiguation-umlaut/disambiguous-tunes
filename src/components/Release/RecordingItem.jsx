import React from 'react';
import PropTypes from 'prop-types';

const RecordingItem = ({ title, length }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{length}</p>
    </div>
  );
};

RecordingItem.propTypes = {
  title: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired
};

export default RecordingItem;
