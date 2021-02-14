import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecordingItem from './RecordingItem';

const RecordingList = ({ recordings, artist }) => {

  const recordingElements = recordings.map(recording => (
    <div key={recording.id}>
      <Link to={`/lyrics/${artist}/${recording.title}`}>
        <RecordingItem
          title={recording.title}
          length={recording.length}
        />
      </Link>
    </div>
  ));

  return (
    <div>
      {recordingElements}
    </div>
  );
};

RecordingList.propTypes = {
  artist: PropTypes.string,
  recordings: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired, 
        length: PropTypes.number.isRequired
      }
    )).isRequired
};

export default RecordingList;
