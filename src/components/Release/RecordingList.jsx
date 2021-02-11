import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { shape } from 'prop-types';
import RecordingItem from './RecordingItem';

const RecordingList = ({ recordings }) => {

  const recordingElements = recordings.map(recording => (
    <div key={recording.id}>
      <Link to={`/lyrics/${recording.artist}/${recording.title}`}>
        <RecordingItem
          title={recording.title}
          length={recording.length}
        />
      </Link>
    </div>
  ));

  return (
    <div data-testid="recordings">
      {recordingElements}
    </div>
  );
};

RecordingList.propTypes = {
  recordings: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired, 
        length: PropTypes.string.isRequired
      }
    )).isRequired
};

export default RecordingList;
