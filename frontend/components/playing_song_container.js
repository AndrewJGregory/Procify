import { connect } from 'react-redux';
import PlayingSong from './playing_song';
import { toggleSongPlaying, setAudioSrc, selectPlayingSong } from '../actions/playing_song_actions';

const mapStateToProps = state => {
  return { playingSong: state.ui.playingSong,
  audio: state.ui.audio,
  audioSrc: state.ui.audioSrc,
  isSongPlaying: state.ui.isSongPlaying  };
};

export const mapDispatchToProps = dispatch => {
  return {
    toggleSongPlaying: () => dispatch(toggleSongPlaying()),
    setAudioSrc: audioSrc => dispatch(setAudioSrc(audioSrc)),
    selectPlayingSong: song => dispatch(selectPlayingSong(song)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayingSong);
