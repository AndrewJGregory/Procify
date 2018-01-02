import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <section className='greeting'>
          <h2>Welcome, {this.props.currentUser.username}</h2>
          <button onClick={() => this.props.logout()}>Logout</button>
        </section>
      );
    } else {
      return (
        <section className='greeting'>
          <h2>Have an account? <Link to='/login'>Login</Link></h2>
          <h2>First time? <Link to='/signup'>Signup</Link></h2>
        </section>
      );
    }
  }
}
export default Greeting;
