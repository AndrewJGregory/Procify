export const TOGGLE_SONG_PLAYING = "TOGGLE_SONG_PLAYING";
export const SET_AUDIO_SRC = "SET_AUDIO_SRC";
export const SELECT_PLAYING_SONG = "SELECT_PLAYING_SONG";
export const SET_INTERVAL_ID = "SET_INTERVAL_ID";
export const GOTO_NEXT_SONG = "GOTO_NEXT_SONG";
export const GOTO_PREVIOUS_SONG = "GOTO_PREVIOUS_SONG";
export const SET_QUEUE = "SET_QUEUE";
export const SET_QUEUE_POSITION = "SET_QUEUE_POSITION";

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

export const gotoNextSong = () => {
  return {
    type: GOTO_NEXT_SONG
  };
};

export const gotoPreviousSong = () => {
  return {
    type: GOTO_PREVIOUS_SONG
  };
};

export const setQueue = songs => {
  return {
    type: SET_QUEUE,
    songs
  };
};

export const setQueuePosition = queuePosition => {
  return {
    type: SET_QUEUE_POSITION,
    queuePosition
  };
};

export const pauseSong = () => (dispatch, getState) => {
  const state = getState();
  const audio = state.ui.audio;
  audio.pause();
  dispatch(toggleSongPlaying());
};

export const playSong = () => (dispatch, getState) => {
  const state = getState();
  const audio = state.ui.audio;
  audio.play();
  dispatch(toggleSongPlaying());
};

export const loadNewSong = song => (dispatch, getState) => {
  const state = getState();
  const audio = state.ui.audio;
  dispatch(setAudioSrc(song.url));
  audio.load();
};

export const playNewSong = song => dispatch => {
  dispatch(selectPlayingSong(song));
  dispatch(loadNewSong(song));
  dispatch(playSong());
};
