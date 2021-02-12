import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ handleSearch, handleClick }) => {
  return (
    <div>
      <h1>DISAMBIGUOUS TUNES</h1>
      <form onSubmit={handleClick}>
        <input 
          type="text" 
          onChange={handleSearch}
          placeholder="Search..." 
        />
        <button>Search</button>
      </form>
    </div>
  );
};

Header.propTypes = {
  handleSearch: PropTypes.func,
  handleClick: PropTypes.func
};

export default Header;
