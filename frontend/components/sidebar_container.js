import { connect } from "react-redux";
import Sidebar from "./sidebar";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return { username: state.session.currentUser.username };
};

export default withRouter(connect(mapStateToProps, null)(Sidebar));
