/* eslint-disable max-len */
import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import { useArtists } from '../../state/hooks';

const Header = () => {
 
  return (
    <div>
      <h1>DISAMBIGUOUS TUNES</h1>
      <Link to="/"><button onClick={useArtists('', 1)}>Back to Home</button></Link>
      <Search />
    </div>
  );
};

export default Header;
