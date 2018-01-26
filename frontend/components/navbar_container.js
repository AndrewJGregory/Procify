import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from './navbar';

const mapStateToProps = (state, ownProps) => {
  return {
    type: ownProps.match.params.type
  };
};

export default withRouter(connect(
  mapStateToProps,
  null
)(Navbar));
