import React from 'react';
import PropTypes from 'prop-types';
import { milliConvertor } from '../../utils/milliConvertor';

const RecordingItem = ({ title, length }) => {
  const modifiedLength = milliConvertor(length);
  return (
    <div>
      <p>{title}</p>
      <p>{modifiedLength}</p>
    </div>
  );
};

RecordingItem.propTypes = {
  title: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired
};

export default RecordingItem;
