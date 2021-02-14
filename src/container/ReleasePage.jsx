/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useRecording } from '../state/hooks';
import RecordingList from '../components/Release/RecordingList';
import styles from './Containers.css';

const ReleasePage = ({ match }) => {
  const { loading, recordings } = useRecording(match.params.id);
  
  if(loading) return <img className={styles.loading} src="/LoadingSpinner.gif" alt="loading" />;

  return (
    <div 
      className={styles.releasepage} data-testid="recordings">
      <RecordingList 
        recordings={recordings}
        artist = {match.params.name}
      />
    </div>
  );
};

ReleasePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ReleasePage;
