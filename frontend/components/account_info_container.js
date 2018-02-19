import { connect } from "react-redux";
import AccountInfo from "./account_info";
import { logout } from "../actions/session_actions";

const mapStateToProps = state => {
  return {
    username: state.session.currentUser.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
