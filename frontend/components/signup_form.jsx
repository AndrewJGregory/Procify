import React from 'react';
import { Link } from 'react-router-dom';
import * as errorUtil from '../util/error_util.jsx';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      confirmEmail: '',
      password: '',
      birthday: {
        month: '',
        day: '',
        year: ''
      }
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

    render() {
      const {
        usernameInputErrorClass,
        passwordInputErrorClass,
        emailInputErrorClass,
        errorHeader
      } = errorUtil.generateInputErrorClasses(this.props.errors);

      const {
        usernameElementErrorClass,
        passwordElementErrorClass,
        emailElementErrorClass,
        birthdayElementErrorClass
      } = errorUtil.generateElementErrorClasses(this.props.errors);


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
              {
                errorUtil.generateErrorElement(
                this.props.errors, emailElementErrorClass, 'email')
              }
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
              {
                errorUtil.generateErrorElement(
                  this.props.errors, passwordElementErrorClass, 'password')
              }
              <input type='text'
                value={this.state.username}
                placeholder='What should we call you?'
                className={`session-form-input ${usernameInputErrorClass}`}
                onChange={this.updateInput('username')}
                onFocus={() => this.props.clearErrors()}
                />
              {
                errorUtil.generateErrorElement(
                  this.props.errors, usernameElementErrorClass, 'username')
              }
              <input type='date'
                value={this.state.birthday}
                className={`session-form-input`}
                onFocus={() => this.props.clearErrors()}
                />
              {
                errorUtil.generateErrorElement(
                  this.props.errors, birthdayElementErrorClass, 'birthday')
              }
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
