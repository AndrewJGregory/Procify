import { connect } from 'react-redux';
import SongIndexItem from './song_index_item';
import { swapAddSongFormShow } from '../actions/song_actions';
import { selectSongId } from '../actions/song_actions';

const mapStateToProps = state => {
  return {
    isAddSongFormDisplayed: state.ui.isAddSongFormDisplayed,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    swapAddSongFormShow: () => dispatch(swapAddSongFormShow()),
    selectSongId: songId => dispatch(selectSongId(songId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndexItem);
