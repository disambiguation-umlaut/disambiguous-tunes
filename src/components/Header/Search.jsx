import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styles from './Header.css';

const Search = () => {
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    if(!search || /^\s*$/.test(search) || /^\d+$/.test(search)) {
      alert('Artist not found');
    } else {
      history.push(`/landing/?search=${search}`);
    }
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
        <button className={styles.submit}>Submit</button>
      </form>
    </div>
  );
};

Search.propTypes = {
  handleClick: PropTypes.func
};

export default Search;
