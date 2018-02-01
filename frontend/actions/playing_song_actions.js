export const TOGGLE_SONG_PLAYING = 'TOGGLE_SONG_PLAYING';
export const SET_AUDIO_SRC = 'SET_AUDIO_SRC';
export const SELECT_PLAYING_SONG = 'SELECT_PLAYING_SONG';
export const SET_INTERVAL_ID = 'SET_INTERVAL_ID';

export const toggleSongPlaying = () => {
  return {
    type: TOGGLE_SONG_PLAYING
  };
};

export const setAudioSrc = audioSrc => {
  return {
    type: SET_AUDIO_SRC,
    audioSrc
  };
};

export const selectPlayingSong = song => {
  return {
    type: SELECT_PLAYING_SONG,
    song
  };
};

export const setIntervalId = id => {
  return {
    type: SET_INTERVAL_ID,
    id
  };
};
