import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className='greeting-page'>
        <div className='greeting-content'>
          <section className='greeting-left'>
            <Link to='/signup'>Signup</Link>
            <h3 className='separator-text'>already have an account?</h3>
            <Link to='/login'>Login</Link>
          </section>
          <section className='greeting-right'>
            <p className='greeting-text'>Get awesome music, all the time.</p>
            <h3>Listen to billions of songs for free.</h3>
            <ul>
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
