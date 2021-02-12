import React from 'react';
import PropTypes from 'prop-types';
import ReleaseItem from './ReleaseItem';
import { Link } from 'react-router-dom ';

const ReleaseList = ({ releases }, { artist }) => {
  const releaseElements = releases.map(release => {
    <div key={release.id}>
      <Link to={`/release/${release.id}`}>
        <ReleaseItem
          release={release}
          artist={artist} 
        />
      </Link>
    </div>;
  });

  return (
    <div data-testid="releases">
      {releaseElements}
    </div>
  );
};

ReleaseList.propTypes = {
  releases: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.string.isRequired, 
        title: PropTypes.string.isRequired,
        cover: PropTypes.boolean.isRequired,
        date: PropTypes.string.isRequired
      }
    )).isRequired
};

export default ReleaseList;

