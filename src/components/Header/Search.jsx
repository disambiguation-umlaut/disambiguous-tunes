import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const [search, setSearch] = useState('');
  const history = useHistory();
  
  console.log(search);

  // history.push('?search=whatever')

  const handleSubmit = e => {
    e.preventDefault();

    history.push(`/?search=${search}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          onChange = {(e) => setSearch(e.target.value)}
          value = {search}
          placeholder="Search..." 
        />
        <button>Search</button>
      </form>
    </div>
  );
};

Search.propTypes = {
  handleClick: PropTypes.func
};

export default Search;
