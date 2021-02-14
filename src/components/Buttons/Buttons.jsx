/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Buttons.css';

const Buttons = ({ count, handleIncrease, handleDecrease }) => {

  return (
    <div className={styles.buttons}>
      {
        count === 1
          ?
          <div>
            <button style={{ display: 'none' }} onClick={handleDecrease}>Previous</button>
            <span className={styles.count} data-testid="span">Page {count}</span>
            <button onClick={handleIncrease}>Next</button>
          </div>
          :
          <div>
            <button onClick={handleDecrease}>Previous</button>
            <span className={styles.count}>Page {count}</span>
            <button onClick={handleIncrease}>Next</button>
          </div>
      }
    </div>
  );
};

Buttons.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func,
  handleIncrease: PropTypes.func,
  handleDecrease: PropTypes.func
};

export default Buttons;

