import { connect } from "react-redux";
import PlayingSong from "./playing_song";
import {
  toggleSongPlaying,
  setAudioSrc,
  selectPlayingSong,
  setTime,
  gotoNextSong,
  gotoPreviousSong,
  pauseSong,
  playSong,
  loadNewSong,
  playNewSong
} from "../actions/playing_song_actions";

const mapStateToProps = state => {
  const artist = state.entities.artists[state.ui.playingSong.artist_id];
  let playingSongAlbum;
  Object.values(state.entities.albums).forEach(album => {
    if (album.song_ids && album.song_ids.includes(state.ui.playingSong.id)) {
      playingSongAlbum = album;
    }
  });

  const {
    playingSong,
    audio,
    audioSrc,
    isSongPlaying,
    intervalId,
    queue,
    queuePosition
  } = state.ui;

  return {
    playingSong,
    audio,
    audioSrc,
    isSongPlaying,
    intervalId,
    artist,
    playingSongAlbum,
    queue,
    queuePosition
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    toggleSongPlaying: () => dispatch(toggleSongPlaying()),
    setAudioSrc: audioSrc => dispatch(setAudioSrc(audioSrc)),
    selectPlayingSong: song => dispatch(selectPlayingSong(song)),
    setTime: time => dispatch(setTime(time)),
    gotoNextSong: () => dispatch(gotoNextSong()),
    gotoPreviousSong: () => dispatch(gotoPreviousSong()),
    pauseSong: () => dispatch(pauseSong()),
    playSong: () => dispatch(playSong()),
    loadNewSong: song => dispatch(loadNewSong(song)),
    playNewSong: song => dispatch(playNewSong(song))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayingSong);
