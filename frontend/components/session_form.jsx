import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      confirmEmail: '',
      password: '',
      birthday: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user =  Object.assign({}, this.state);
    delete user['confirmEmail'];

    this.props.submitForm(user).then(() => {
      this.props.history.push('/collection/playlists');
    });
  }

  updateInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  _generateFormInfo() {
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
    return {otherFormType, otherFormText, otherLinkText};
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

  _generateFieldsAbovePassword(otherFormType, usernameErrorClass) {
    let fieldsAbovePassword = (
      <input type='text'
        value={this.state.email}
        placeholder='Username'
        className={`session-form-input ${usernameErrorClass}`}
        onChange={this.updateInput('username')}
        onFocus={() => this.props.clearErrors()}
        />
    );

    if (otherFormType === 'Log in') {
      fieldsAbovePassword = (
        <section className='email-fields'>
          <input type='text'
            value={this.state.email}
            placeholder='Email'
            className={`session-form-input`}
            onChange={this.updateInput('email')}
            onFocus={() => this.props.clearErrors()}
            />
          <input type='text'
            value={this.state.confirmEmail}
            placeholder='Confirm email'
            className={`session-form-input`}
            onChange={this.updateInput('confirmEmail')}
            onFocus={() => this.props.clearErrors()}
            />
        </section>
      );
    }
    return fieldsAbovePassword;
  }

  _generateFieldsBelowPassword(otherFormType, usernameErrorClass) {

    let fieldsBelowPassword = null;
    if (otherFormType === 'Log in') {
      fieldsBelowPassword = (
        <section
          className='fields-below-password-input'>
          <input type='text'
            value={this.state.username}
            placeholder='What should we call you?'
            className={`session-form-input ${usernameErrorClass}`}
            onChange={this.updateInput('username')}
            onFocus={() => this.props.clearErrors()}
            />
          <input type='date'
            value={this.state.birthday}
            className={`session-form-input`}
            onFocus={() => this.props.clearErrors()}
            />
        </section>
      );
    }

    return fieldsBelowPassword;
  }

  render() {
    const {
      otherFormType,
      otherFormText,
      otherLinkText
    } = this._generateFormInfo();

    const {
      usernameErrorClass,
      passwordErrorClass,
      errorHeader
    } = this._generateErrorInfo();

    const fieldsAbovePassword =
    this._generateFieldsAbovePassword(
      otherFormType, usernameErrorClass
    );


    const fieldsBelowPassword =
    this._generateFieldsBelowPassword(
      otherFormType, usernameErrorClass
    );

    return (
      <main className='session-page'>
        <header className='logo-header'>
          Procify img
        </header>
        <form className='session-form' onSubmit={this.handleSubmit}>
          {errorHeader}
          {fieldsAbovePassword}
          <h4 className='session-error'>{this.props.errors.username}
          </h4>
          <br />
          <input type='password'
            value={this.state.password}
            placeholder='Password'
            className={`session-form-input ${passwordErrorClass}`}
            onChange={this.updateInput('password')}
            onFocus={() => this.props.clearErrors()}
            />
          <h4 className='session-error'>{this.props.errors.password}</h4>
          <br />
          {fieldsBelowPassword}
          <div className='session-link-container'>
            <button className='session-link'>
              {this.props.formType}
            </button>
          </div>
          <h4>
            {otherFormText}
            <Link className='form-link'
              to={otherLinkText}>{otherFormType}</Link>
          </h4>
        </form>
      </main>
    );
  }
}
