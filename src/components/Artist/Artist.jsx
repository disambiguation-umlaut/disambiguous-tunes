import React from 'react';
import { getArtist } from '../../services/fetches';

const Artist = async() => {
  const artist = await getArtist('blue', 2);

  console.log(artist);
  
  return (
    <div>
    </div>
  );
};

export default Artist;
