import { connect } from 'react-redux';
import PlayingSong from './playing_song';
import {
  toggleSongPlaying,
  setAudioSrc,
  selectPlayingSong,
  setIntervalId
} from '../actions/playing_song_actions';

const mapStateToProps = state => {
  return {
    playingSong: state.ui.playingSong,
    audio: state.ui.audio,
    audioSrc: state.ui.audioSrc,
    isSongPlaying: state.ui.isSongPlaying,
    intervalId: state.ui.intervalId
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    toggleSongPlaying: () => dispatch(toggleSongPlaying()),
    setAudioSrc: audioSrc => dispatch(setAudioSrc(audioSrc)),
    selectPlayingSong: song => dispatch(selectPlayingSong(song)),
    setIntervalId: id => dispatch(setIntervalId(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayingSong);
