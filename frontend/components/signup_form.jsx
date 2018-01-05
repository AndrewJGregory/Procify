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
      birthday: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this._formatUserObject();
    this.props.submitForm(user).then(() => {
      this.props.history.push('/collection/playlists');
    });
  }

  updateInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  _formatBirthday() {
    return `${this.state.birthdayYear}-${this.state.birthdayDay}-${this.state.birthdayMonth}`;
  }

  _formatUserObject() {
    const user = Object.assign({}, this.state);
    user.birthday = this._formatBirthday();
    delete user['confirmEmail'];
    delete user['birthdayYear'];
    delete user['birthdayDay'];
    delete user['birthdayMonth'];
    return user;
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
                  <section className='birthday-inputs-container'>
                    <select
                      className="birthday-month-dropdown"
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
                      className='birthday-input'
                      onChange={this.updateInput('birthdayDay')}
                      ></input>
                    <input type='number'
                      value={this.state.birthdayYear}
                      placeholder='Year'
                      className='birthday-input'
                      onChange={this.updateInput('birthdayYear')}
                      ></input>
                  </section>
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
