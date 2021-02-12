import React from 'react';
import PropTypes from 'prop-types';
import ReleaseItem from './ReleaseItem';
import { Link } from 'react-router-dom';

const ReleaseList = ({ releases, artist }) => {
  const releaseElements = releases.map(release => (
    <div key={release.id}>
      <Link to={`/release/${artist}/${release.id}`}>
        <ReleaseItem
          release={release}
          artist={artist} 
        />
      </Link>
    </div>
  ));

  return (
    <div data-testid="releases">
      {releaseElements}
    </div>
  );
};

ReleaseList.propTypes = {
  artist: PropTypes.string.isRequired,
  releases: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.string, 
        title: PropTypes.string,
        cover: PropTypes.boolean,
        date: PropTypes.string
      }
    ))
};

export default ReleaseList;

