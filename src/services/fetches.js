import { listenerCount } from "process";

const URL = 'http://musicbrainz.org/ws/2/';

// offset = (pageNumber * 25) + 1

export const getArtist = (name, offset) => {
  return fetch(`${URL}artist?query=${name}&fmt=json&limit=25&offset=${offset}`)
    .then(res => res.json())
    .then(({ artists }) => artists.map(artist => ({
      id: artist.id,
      name: artist.name,
      begin: artist['life-span'].begin,
      end: artist['life-span'].ended,
      disambig: artist.disambiguation
    })));
};

// export const getCoverArt = (id) => {
//   return fetch(`${URL}release?artist=${id}&fmt=json`)
//     .then(res => res.json())
//     .then(({ releases }) => releases.map(release => ({
//       id: release.id,
//       cover: release['cover-art-archive'].artwork
//     })));
// };

export const getRelease = (id) => {
  return fetch(`${URL}release?artist=${id}&fmt=json`)
    .then(res => res.json())
    .then(({ releases }) => releases.map(release => ({
      id: release.id,
      title: release.title,
      date: release.date,
      cover: release['cover-art-archive'].artwork
    })));
};

export const getRecording = (id) => {
  return fetch(`${URL}recording?release=${id}&fmt=json`)
    .then(res => res.json())
    .then(({ recordings }) => recordings.map(recording => ({
      title: recording.title,
      length: recording.length
    })));
};
