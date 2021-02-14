import React from 'react';
import PropTypes from 'prop-types';
import { useRecording } from '../state/hooks';
import RecordingList from '../components/Release/RecordingList';


const ReleasePage = ({ match }) => {
  const { loading, recordings } = useRecording(match.params.id);
  
  if(loading) return <img src="/LoadingSpinner.gif" alt="Loading" />;

  return (
    <div data-testid="recordings">
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
