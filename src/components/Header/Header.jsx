import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';

const Header = () => {

    
  return (
    <div>
      <h1>DISAMBIGUOUS TUNES</h1>
      <Link to="/"><span>Back to Home</span></Link>
      <Search />
    </div>
  );
};

export default Header;
