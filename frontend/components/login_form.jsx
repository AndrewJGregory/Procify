import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state).then(() => {
      this.props.history.push('/collection/playlists');
    });
  }

  updateInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  _generateErrorInfo() {
    let usernameErrorClass = '';
    let passwordErrorClass = '';

    if (this.props.errors.username) {
      usernameErrorClass = 'invalid-input';
    }

    if (this.props.errors.password) {
      passwordErrorClass = 'invalid-input';
    }

    let errorHeader = null;
    if (this.props.errors.credentials) {
      errorHeader =
      <header className='error-header'>
        {this.props.errors.credentials}
      </header>;
    }

    return {usernameErrorClass, passwordErrorClass, errorHeader};
  }

  render() {
    const {
      usernameErrorClass,
      passwordErrorClass,
      errorHeader
    } = this._generateErrorInfo();

    return (
      <main className='session-page'>
        <header className='logo-header'>
          Procify img
        </header>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <section className='session-form-contents'>
            {errorHeader}
            <input type='text'
              value={this.state.username}
              placeholder='Username'
              className={`session-form-input ${usernameErrorClass}`}
              onChange={this.updateInput('username')}
              onFocus={() => this.props.clearErrors()}
              />
            <h4 className='session-error'>{this.props.errors.username}
            </h4>
            <input type='password'
              value={this.state.password}
              placeholder='Password'
              className={`session-form-input ${passwordErrorClass}`}
              onChange={this.updateInput('password')}
              onFocus={() => this.props.clearErrors()}
              />
            <h4 className='session-error'>{this.props.errors.password}</h4>
            <div className='session-link-container'>
              <button className='session-link'>
                {'log in'}
              </button>
            </div>
            <h4>
              Don't have an account?
              <Link className='form-link'
                to='/signup'> sign up</Link>
            </h4>
          </section>
        </form>
      </main>
    );
  }
}

export default LoginForm;
