/* eslint-disable max-len */
import React from 'react';
import ArtistList from '../components/Search/ArtistList';
import Buttons from '../components/Buttons/Buttons';
import { useArtists } from '../state/hooks';
import { useLocation } from 'react-router-dom';

const LandingPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const { loading, artists, count, setCount } = useArtists(params.get('search'), 2);

  

  if(loading) return <p data-testid="loading">Loading</p>;

  return (
    <div>
      <ArtistList
        artists={artists}
      />    
      <Buttons 
        count={count}
        setCount={setCount}
      />
    </div>
  );
};

export default LandingPage;
