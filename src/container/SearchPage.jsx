/* eslint-disable max-len */
import React from 'react';
import ArtistList from '../components/Search/ArtistList';
import Buttons from '../components/Buttons/Buttons';
import { useArtists, useButtons } from '../state/hooks';
import { useLocation } from 'react-router-dom';
import styles from './Containers.css';

const SearchPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const { count, setCount, handleIncrease, handleDecrease } = useButtons();
  const { loading, artists } = useArtists(params.get('search'), count);

  if(loading) return <img data-testid="loading" className={styles.loading} src="/LoadingSpinner.gif" alt="loading" />;

  return (
    <div className={styles.searchpage}>
      <Buttons 
        count={count}
        setCount={setCount}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
      <ArtistList
        artists={artists}
      /> 
      <Buttons 
        count={count}
        setCount={setCount}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />   
    </div>
  );
};

export default SearchPage;
