import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
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

  _generateInputErrorClasses() {
    let usernameInputErrorClass = '';
    let passwordInputErrorClass = '';
    let emailInputErrorClass = '';

    if (this.props.errors.username) {
      usernameInputErrorClass = 'invalid-input';
    }

    if (this.props.errors.password) {
      passwordInputErrorClass = 'invalid-input';
    }

    if (this.props.errors.email) {
      emailInputErrorClass = 'invalid-input';
    }

    let errorHeader = null;
    if (this.props.errors.credentials) {
      errorHeader =
      <header className='error-header'>
        {this.props.errors.credentials}
      </header>;
    }

    return {
      usernameInputErrorClass,
      passwordInputErrorClass,
      emailInputErrorClass,
      errorHeader
    };
  }

  _generateElementErrorClasses() {
    let usernameErrorElementClass = null;
    let passwordErrorElementClass = null;
    let emailErrorElementClass = null;
    let birthdayErrorElementClass = null;
    if (this.props.errors.username) {
      usernameErrorElementClass = 'session-error';
    }

    if (this.props.errors.password) {
      passwordErrorElementClass = 'session-error';
    }

    if (this.props.errors.email) {
      emailErrorElementClass = 'session-error';
    }

    if (this.props.errors.birthday) {
      birthdayErrorElementClass = 'session-error';
    }

    return {
      usernameErrorElementClass,
      passwordErrorElementClass,
      emailErrorElementClass,
      birthdayErrorElementClass
    };
  }

  _generateErrorElement(errorText, errorField) {
    return <h4 className='session-error'>{this.props.errors[errorField]}</h4>;
    }

    render() {
      const {
        usernameInputErrorClass,
        passwordInputErrorClass,
        emailInputErrorClass,
        errorHeader
      } = this._generateInputErrorClasses();

      const {
        usernameElementErrorClass,
        passwordElementErrorClass,
        emailElementErrorClass,
        birthdayElementErrorClass
      } = this._generateElementErrorClasses();


      return (
        <main className='session-page'>
          <header className='logo-header'>
            Procify img
          </header>
          <form className='session-form' onSubmit={this.handleSubmit}>
            <section className='session-form-contents'>
              {errorHeader}
              <input type='text'
                value={this.state.email}
                placeholder='Email'
                className={`session-form-input ${emailInputErrorClass}`}
                onChange={this.updateInput('email')}
                onFocus={() => this.props.clearErrors()}
                />
              {this._generateErrorElement(emailElementErrorClass, 'email')}
              <input type='text'
                value={this.state.confirmEmail}
                placeholder='Confirm email'
                className={`session-form-input`}
                onChange={this.updateInput('confirmEmail')}
                onFocus={() => this.props.clearErrors()}
                />
              <input type='password'
                value={this.state.password}
                placeholder='Password'
                className={`session-form-input ${passwordInputErrorClass}`}
                onChange={this.updateInput('password')}
                onFocus={() => this.props.clearErrors()}
                />
              {this._generateErrorElement(passwordElementErrorClass, 'password')}
              <input type='text'
                value={this.state.username}
                placeholder='What should we call you?'
                className={`session-form-input ${usernameInputErrorClass}`}
                onChange={this.updateInput('username')}
                onFocus={() => this.props.clearErrors()}
                />
              {this._generateErrorElement(usernameElementErrorClass, 'username')}
              <input type='date'
                value={this.state.birthday}
                className={`session-form-input`}
                onFocus={() => this.props.clearErrors()}
                />
              {this._generateErrorElement(birthdayElementErrorClass, 'birthday')}
              <div className='session-link-container'>
                <button className='session-link'>
                  {this.props.formType}
                </button>
              </div>
              <h4>
                Already have an account?
                <Link className='form-link'
                  to='/login'> log in</Link>
              </h4>
            </section>
          </form>
        </main>
      );
    }
  }

  export default SignupForm;
