/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { getArtist, getRelease, getRecording, getLyrics } from '../services/fetches';

export const useArtists = (query, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [count, setCount] = useState(1);

  const offset = (pageNumber * 25) - 24;

  useEffect(() => {
    if(query === null) {
      query = ' ';
      setLoading(false);
    }
    getArtist(query, offset)
      .then(artists => {
        setArtists(artists);
        setLoading(false);
      });
  }, [query, offset]);

  return {
    loading,
    artists,
    count,
    setCount
  };
};

export const useReleases = (id) => {
  const [loading, setLoading] = useState(true);
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    getRelease(id)
      .then(releases => {
        setReleases(releases);
        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    releases
  };
};

export const useRecording = (id) => {
  const [loading, setLoading] = useState(true);
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    getRecording(id)
      .then(recordings => {
        setRecordings(recordings);
        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    recordings
  };
};

export const useLyrics = (artist, title) => {
  const [loading, setLoading] = useState(true);
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {
    getLyrics(artist, title)
      .then(lyrics => {
        setLyrics(lyrics);
        setLoading(false);
      });
  }, [artist, title]);

  return {
    loading,
    lyrics
  };
};

