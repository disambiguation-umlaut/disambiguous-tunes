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

