import React from 'react';
import PropTypes from 'prop-types';
import { useRecording } from '../state/hooks';
import RecordingList from '../components/Release/RecordingList';


const ReleasePage = ({ match }, { artist }) => {
  const { loading, recordings } = useRecording(match.params.id);
  
  if(loading) return <p>Loading</p>;

  return (
    <div>
      <RecordingList 
        recordings={recordings}
        artist = {artist}
      />
    </div>
  );
};

ReleasePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

export default ReleasePage;
