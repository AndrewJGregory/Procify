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
      birthdayYear: '',
      birthdayDay: '',
      birthdayMonth: 'Month',
      birthday: '',
      isSameEmail: true
    };
    this.confirmEmailErrorMessage = "Email address doesn't match.";
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    let isSameEmail = true;
    if (this.state.email !== this.state.confirmEmail) {
      this.setState({isSameEmail: false});
      isSameEmail = false;
    } else {
      this.setState({isSameEmail: true});
      isSameEmail = true;
    }

    if (isSameEmail) {
      const user = this._formatUserObject();
      this.props.submitForm(user).then(() => {
        this.props.history.push('/collection/playlists');
      });
    }
  }

  updateInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  _formatBirthday() {
    let month = this.state.birthdayMonth;
    if (this.state.birthdayMonth === 'Month') {
      month = '';
    }
    return `${this.state.birthdayYear}-${this.state.birthdayDay}-${month}`;
  }

  _formatUserObject() {
    const user = Object.assign({}, this.state);
    user.birthday = this._formatBirthday();
    delete user['confirmEmail'];
    delete user['birthdayYear'];
    delete user['birthdayDay'];
    delete user['birthdayMonth'];
    delete user['isSameEmail'];
    return user;
  }

  clearAllErrors() {
    this.props.clearErrors();
    this.setState({isSameEmail: true});
  }

  render() {
    const {
      usernameInputErrorClass,
      passwordInputErrorClass,
      emailInputErrorClass,
      confirmEmailInputErrorClass,
      birthdayInputErrorClass,
      errorHeader
    } = errorUtil.generateInputErrorClasses(
      this.props.errors, this.state.isSameEmail);

      let confirmEmailErrorElement = null;
      if (!this.state.isSameEmail) {
        confirmEmailErrorElement = (
          errorUtil.generateErrorElement(this, 'confirmEmailErrorMessage')
        );
      }
      return (
        <main className='session-page'>
          <header className='logo-header'>
            Procify img
          </header>
          <form className='session-form' onSubmit={this.handleSubmit}>
            <section className='session-form-contents'>
              <h3 className='form-email-header-text'>
                Sign up with your email address.
              </h3>
              {errorHeader}
              <input type='email'
                value={this.state.email}
                placeholder='Email'
                className={`session-form-input
                  ${emailInputErrorClass}
                  signup-form-element`}
                  onChange={this.updateInput('email')}
                  onFocus={() => this.clearAllErrors()}
                  />
                {
                  errorUtil.generateErrorElement(
                    this.props.errors, 'email')
                  }
                  <input type='email'
                    value={this.state.confirmEmail}
                    placeholder='Confirm email'
                    className={`session-form-input
                      ${confirmEmailInputErrorClass}
                      signup-form-element`}
                      onChange={this.updateInput('confirmEmail')}
                      onFocus={() => this.clearAllErrors()}
                      />
                    {confirmEmailErrorElement}
                    <input type='password'
                      value={this.state.password}
                      placeholder='Password'
                      className={`session-form-input
                        ${passwordInputErrorClass}
                        signup-form-element`}
                        onChange={this.updateInput('password')}
                        onFocus={() => this.clearAllErrors()}
                        />
                      {
                        errorUtil.generateErrorElement(
                          this.props.errors, 'password')
                        }
                        <input type='text'
                          value={this.state.username}
                          placeholder='What should we call you?'
                          className={`session-form-input ${usernameInputErrorClass}
                          signup-form-element`}
                          onChange={this.updateInput('username')}
                          onFocus={() => this.clearAllErrors()}
                          />
                        {
                          errorUtil.generateErrorElement(
                            this.props.errors, 'username')
                          }
                          <section className='birthday-form-container'>
                            <div className='dob-text-container'>
                              <h4 className='session-form-input'
                                id='dob-text'
                                >Date of birth:</h4>
                            </div>
                            <div className='birthday-inputs-container'>
                              <select
                                className={`session-form-input
                                  birthday-month-dropdown
                                  ${birthdayInputErrorClass}
                                  signup-form-element`}
                                  value={this.state.birthdayMonth}
                                  onChange={this.updateInput('birthdayMonth')}>
                                  <option disabled>Month</option>
                                  <option value="01">January</option>
                                  <option value="02">February</option>
                                  <option value="03">March</option>
                                  <option value="04">April</option>
                                  <option value="05">May</option>
                                  <option value="06">June</option>
                                  <option value="07">July</option>
                                  <option value="08">August</option>
                                  <option value="09">September</option>
                                  <option value="10">October</option>
                                  <option value="11">November</option>
                                  <option value="12">December</option>
                                </select>
                                <input type='number'
                                  value={this.state.birthdayDay}
                                  placeholder='Day'
                                  className={`session-form-input
                                    birthdayDay-input
                                    ${birthdayInputErrorClass}
                                    signup-form-element`}
                                    onChange={this.updateInput('birthdayDay')}
                                    ></input>
                                  <input type='number'
                                    value={this.state.birthdayYear}
                                    placeholder='Year'
                                    className={`session-form-input
                                      ${birthdayInputErrorClass}
                                      signup-form-element`}
                                      onChange={this.updateInput('birthdayYear')}
                                      ></input>
                                  </div>
                                </section>
                                {
                                  errorUtil.generateErrorElement(
                                    this.props.errors, 'birthday')
                                  }
                                  <div className='session-link-container'>
                                    <button className='session-link'>
                                      sign up
                                    </button>
                                  </div>
                                  <h4 className='otherFormText'>
                                    Already have an account?
                                    <Link className='form-link'
                                      to='/login'> Log in</Link>
                                  </h4>
                                </section>
                              </form>
                            </main>
                          );
                        }
                      }

                      export default SignupForm;
