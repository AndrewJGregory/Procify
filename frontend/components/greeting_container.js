import { connect } from "react-redux";
import Greeting from "./greeting";
import { login } from "../actions/session_actions";

const mapDispatchToProps = dispatch => {
  const username = "guest-demo";
  const password = "thisisjustaguest";
  const user = { username, password };

  return {
    loginAsGuest: () => dispatch(login(user))
  };
};

export default connect(null, mapDispatchToProps)(Greeting);
