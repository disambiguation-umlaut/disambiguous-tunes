import React from 'react';
import ArtistList from '../components/Search/ArtistList';
import { useArtists } from '../state/hooks';
import { useLocation } from 'react-router-dom';

const LandingPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const { loading, artists } = useArtists(params.get('search'), 1);


  if(loading) return <p data-testid="loading">Loading</p>;

  return (
    <div>
      <ArtistList
        artists={artists}
      />    
    </div>
  );
};

export default LandingPage;
