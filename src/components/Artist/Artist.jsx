import React from 'react';
import { getArtist } from '../../services/fetches';

const Artist = async() => {
  const artist = await getArtist('chemical', 2);

  console.log(artist);
  console.log(artist[0]);
  console.log(artist[0].name);
  
  return (
    <div>
      <p>{artist[0].name}</p>
    </div>
  );
};

export default Artist;
