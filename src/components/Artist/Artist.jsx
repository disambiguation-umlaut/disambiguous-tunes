/* eslint-disable max-len */
import React from 'react';
import { getArtist, getRelease, getRecording, getLyrics } from '../../services/fetches';

const Artist = async() => {
  const artist = await getArtist('chemical', 2);
  console.log(artist);

  const release = await getRelease(artist[0].id);
  console.log(release);

  const recording = await getRecording(release[0].id);
  console.log(recording);

  const lyrics = await getLyrics('My Chemical Romance', 'Helena');
  console.log(lyrics);
  
  return (
    <div>
    </div>
  );
};

export default Artist;
