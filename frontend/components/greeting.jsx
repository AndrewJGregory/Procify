import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.props.loginAsGuest().then(() => {
      this.props.history.push('/collection/playlists');
    });
  }

  render() {
    return (
      <main className='greeting-page'>
        <div className='greeting-content'>
          <section className='greeting-side'>
            <div className='logo'>LOGO Procify</div>
            <Link className='session-link'
              to='/signup'>sign up</Link>
            <h3 className='separator-text'>already have an account?</h3>
            <Link className='session-link login-link'
              to='/login'>log in</Link>
            <h3 className='separator-text'>Just looking around? Try a guest demo: </h3>
            <button onClick={this.handleLogin}>
              Guest Demo
            </button>
          </section>
          <section className='greeting-side-right'>
            <h1 className='side-header-text'>
              Get awesome music, all the time.
            </h1>
            <h3 className='side-content-text'>
              Listen to billions of songs for free.
            </h3>
            <ul className='greeting-ul'>
              <li>Find new music you'll love</li>
              <li>Create playlists of your favorite music</li>
            </ul>
          </section>
        </div>
      </main>
    );
  }
}
export default Greeting;
