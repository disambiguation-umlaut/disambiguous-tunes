const URL = 'https://musicbrainz.org/ws/2/';

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
  // throw error if null
};

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

export const getLyrics = (artist, title) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json());
};
