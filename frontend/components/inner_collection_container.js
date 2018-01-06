import { withRouter } from 'react-router-dom';
import InnerCollection from './inner_collection';
import SongIndex from './song_index';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  let component = null;
  switch (ownProps.match.params.type) {
    case 'tracks':
    component = SongIndex;
    break;
    default:
    component = null;
  }

  return { component };
};

export default withRouter(connect(
  mapStateToProps,
  null
)(InnerCollection));
