import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  handleSubmit(e) {
    this.props.submitForm(this.state).then(() => {
      this.props.history.push('/');
    });
  }

  updateInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
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

    return (
      <main className='session-page'>
        <header className='logo-header'>Procify img</header>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <input type='text'
            value={this.state.username}
            placeholder='Username'
            className='session-form-input'
            onChange={this.updateInput('username')}
            />
          <br />
          <input type='text'
            value={this.state.password}
            placeholder='Password'
            className='session-form-input'
            onChange={this.updateInput('password')}
            />
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
