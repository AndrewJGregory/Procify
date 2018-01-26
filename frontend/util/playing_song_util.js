export const pause = props => {
  props.audio.pause();
  window.clearInterval(props.intervalId);
  props.toggleSongPlaying();
};

export const loadNewSong = (props, song) => {
  props.setAudioSrc(song.url);
  props.audio.load();
};

export const rePlay = (props) => {
  props.audio.play();
  props.toggleSongPlaying();
};
