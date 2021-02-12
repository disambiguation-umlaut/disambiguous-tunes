import React from 'react';
import ArtistList from '../components/Search/ArtistList';
import { useArtists } from '../state/hooks';
import PropTypes from 'prop-types';

const LandingPage = ({ query, pageNumber }) => {
  const { loading, artists } = useArtists(query, pageNumber);

  if(loading) return <p>Loading</p>;

  return (
    <div>
      <ArtistList
        artists={artists}
      />    
    </div>
  );
};

LandingPage.propTypes = {
  query: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired
};

export default LandingPage;
