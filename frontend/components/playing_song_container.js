import { connect } from 'react-redux';
import PlayingSong from './playing_song';

const mapStateToProps = state => {
  return { playingSong: state.ui.playingSong };
};

export default connect(
  mapStateToProps,
  null
)(PlayingSong);
