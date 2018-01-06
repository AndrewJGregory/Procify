import { withRouter } from 'react-router-dom';
import InnerCollection from './inner_collection';
import SongIndexContainer from './song_index_container';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  let component = null;
  switch (ownProps.match.params.type) {
    case 'tracks':
    component = SongIndexContainer;
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
