import React from 'react';
import PropTypes from 'prop-types';
import ReleaseList from '../components/Artist/ReleaseList';
import { useReleases } from '../state/hooks';

const ArtistPage = ({ match }) => {
  const { loading, releases } = useReleases(match.params.id);

  if(loading) return <p>Loading</p>;

  return (
    <div>
      <ReleaseList
        releases={releases}
      />    
    </div>
  );
};

ArtistPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ArtistPage;
