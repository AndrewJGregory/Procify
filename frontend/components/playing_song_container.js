import { connect } from 'react-redux';
import PlayingSong from './playing_song';
import {
  toggleSongPlaying,
  setAudioSrc,
  selectPlayingSong,
  setTime
} from '../actions/playing_song_actions';

const mapStateToProps = state => {
  const artist = state.entities.artists[state.ui.playingSong.artist_id];
  let playingSongAlbum;
  Object.values(state.entities.albums).forEach(album => {
    if (album.song_ids && album.song_ids.includes(state.ui.playingSong.id)) {
      playingSongAlbum = album;
    }
  });

  return {
    playingSong: state.ui.playingSong,
    audio: state.ui.audio,
    audioSrc: state.ui.audioSrc,
    isSongPlaying: state.ui.isSongPlaying,
    intervalId: state.ui.intervalId,
    artist,
    playingSongAlbum,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    toggleSongPlaying: () => dispatch(toggleSongPlaying()),
    setAudioSrc: audioSrc => dispatch(setAudioSrc(audioSrc)),
    selectPlayingSong: song => dispatch(selectPlayingSong(song)),
    setTime: time => dispatch(setTime(time)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayingSong);
