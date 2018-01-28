import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as errorUtil from '../util/error_util.jsx';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state).then(() => {
      this.props.history.push('/collection/tracks');
    });
  }

  updateInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  render() {
    const {
      usernameInputErrorClass,
      passwordInputErrorClass,
      errorHeader
    } = errorUtil.generateInputErrorClasses(this.props.errors);

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
              className={`session-form-input
                ${usernameInputErrorClass}`}
              onChange={this.updateInput('username')}
              onFocus={() => this.props.clearErrors()}
              />
            <h4 className='session-error'>{this.props.errors.username}
            </h4>
            <input type='password'
              value={this.state.password}
              placeholder='Password'
              className={`session-form-input ${passwordInputErrorClass}`}
              onChange={this.updateInput('password')}
              onFocus={() => this.props.clearErrors()}
              />
            <h4 className='session-error'>{this.props.errors.password}</h4>
            <div className='session-link-container'>
              <button className='session-link'
                id='login-btn'>
                Log in
              </button>
            </div>
            <h4 className='otherFormText'>
              Don't have an account?
              <Link className='form-link'
                to='/signup'> Sign up</Link>
            </h4>
          </section>
        </form>
      </main>
    );
  }
}

export default LoginForm;
