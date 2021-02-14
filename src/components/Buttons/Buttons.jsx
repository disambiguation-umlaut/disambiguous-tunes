/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ count, handleIncrease, handleDecrease }) => {

  return (
    <div>
      {
        count === 1
          ?
          <div>
            <button style={{ display: 'none' }} onClick={handleDecrease}>Previous</button>
            <span data-testid="span">Page {count}</span>
            <button onClick={handleIncrease}>Next</button>
          </div>
          :
          <div>
            <button onClick={handleDecrease}>Previous</button>
            <span>Page {count}</span>
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

