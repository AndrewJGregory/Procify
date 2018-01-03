import { connect } from 'react-redux';
import Greeting from './greeting';
import { signup } from '../actions/session_actions';

const mapDispatchToProps = dispatch => {
  const randomNum = parseInt(Math.random()*100000);
  const username = 'Guest'.concat(randomNum);
  const password = 'abcdefghij';
  const user = {username, password};

  return {
    loginAsGuest: () => dispatch(signup(user)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Greeting);
