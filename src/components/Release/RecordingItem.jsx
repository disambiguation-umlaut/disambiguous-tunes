import React from 'react';
import PropTypes from 'prop-types';
import { milliConvertor } from '../../utils/milliConvertor';
import styles from './Recording.css';

const RecordingItem = ({ title, length }) => {
  const modifiedLength = milliConvertor(length);
  return (
    <div className={styles.recording}>
      <span className={styles.recName}>{title}</span>
      <span className={styles.recLength}>{modifiedLength}</span>
    </div>
  );
};

RecordingItem.propTypes = {
  title: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired
};

export default RecordingItem;
