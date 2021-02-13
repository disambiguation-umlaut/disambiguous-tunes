/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ count, setCount }) => {

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      {
        count === 1
          ?
          <div>
            <button onClick={handleIncrease}>Next</button>
            <span data-testid="span">Page {count}</span>
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
  setCount: PropTypes.func
};
