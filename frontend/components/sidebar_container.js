import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = state => {
  return { username: state.session.currentUser.username };
};

export default connect(
  mapStateToProps,
  null
)(Sidebar);
