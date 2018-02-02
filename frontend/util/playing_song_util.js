export const pause = props => {
  props.audio.pause();
  props.toggleSongPlaying();
};

export const loadNewSong = (props, song) => {
  props.setAudioSrc(song.url);
  props.audio.load();
};

export const rePlay = props => {
  props.audio.play();
  props.toggleSongPlaying();
};

export const playNewSong = props => {
  props.selectPlayingSong(props.song);
  loadNewSong(props, props.song);
  rePlay(props);
};
