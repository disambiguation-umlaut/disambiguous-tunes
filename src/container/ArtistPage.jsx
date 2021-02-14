/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import ReleaseList from '../components/Artist/ReleaseList';
import { useReleases } from '../state/hooks';
import styles from './Containers.css';

const ArtistPage = ({ match }) => {
  const { loading, releases } = useReleases(match.params.id);

  if(loading) return <img className={styles.loading} src="/LoadingSpinner.gif" alt="Loading" />;

  return (
    <div>
      <ReleaseList
        releases={releases}
        artist={match.params.name}
      />    
    </div>
  );
};

ArtistPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ArtistPage;
