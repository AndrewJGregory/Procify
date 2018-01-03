import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  handleSubmit(e) {
    this.props.submitForm(this.state).then(() => {
      this.props.history.push('/collection/playlists');
    });
  }

  updateInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    let otherFormType, otherFormText, otherLinkText;
    if (this.props.formType === 'log in') {
      otherFormType = 'Sign up';
      otherLinkText = '/signup';
      otherFormText = 'Don\'t have an account? ';
    } else {
      otherFormType = 'Log in';
      otherLinkText = '/login';
      otherFormText = 'Already have an account? ';
    }

    let usernameErrorClass = '';
    let passwordErrorClass = '';

    if (this.props.errors.username) {
      usernameErrorClass = 'invalid-input';
    }

    if (this.props.errors.password) {
      passwordErrorClass = 'invalid-input';
    }

    let errorHeader;
    if (this.props.errors.credentials) {
      errorHeader =
      <header className='error-header'>
        {this.props.errors.credentials}
      </header>;
    }
    return (
      <main className='session-page'>
        <header className='logo-header'>
          Procify img
        </header>
        <form className='session-form' onSubmit={this.handleSubmit}>
          {errorHeader}
          <input type='text'
            value={this.state.username}
            placeholder='Username'
            className={`session-form-input ${usernameErrorClass}`}
            onChange={this.updateInput('username')}
            onFocus={() => this.props.clearErrors()}
            />
          <h4 className='session-error'>{this.props.errors.username}</h4>
          <br />
          <input type='text'
            value={this.state.password}
            placeholder='Password'
            className={`session-form-input ${passwordErrorClass}`}
            onChange={this.updateInput('password')}
            onFocus={() => this.props.clearErrors()}
            />
          <h4 className='session-error'>{this.props.errors.password}</h4>
          <br />
          <button className='session-link'>
            {this.props.formType}
          </button>

          <h4>
            {otherFormText}
            <Link className='form-link' to={otherLinkText}>{otherFormType}</Link>
          </h4>
        </form>
      </main>
    );
  }
}
export default SessionForm;
