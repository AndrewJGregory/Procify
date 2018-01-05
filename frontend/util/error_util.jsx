import React from 'react';

export const generateInputErrorClasses = (errors) => {
  let usernameInputErrorClass = '';
  let passwordInputErrorClass = '';
  let emailInputErrorClass = '';

  if (errors.username) {
    usernameInputErrorClass = 'invalid-input';
  }

  if (errors.password) {
    passwordInputErrorClass = 'invalid-input';
  }

  if (errors.email) {
    emailInputErrorClass = 'invalid-input';
  }

  let errorHeader = null;
  if (errors.credentials) {
    errorHeader =
    <header className='error-header'>
      {errors.credentials}
    </header>;
  }

  return {
    usernameInputErrorClass,
    passwordInputErrorClass,
    emailInputErrorClass,
    errorHeader
  };
};

export const generateElementErrorClasses = (errors) => {
  let usernameErrorElementClass = null;
  let passwordErrorElementClass = null;
  let emailErrorElementClass = null;
  let birthdayErrorElementClass = null;
  if (errors.username) {
    usernameErrorElementClass = 'session-error';
  }

  if (errors.password) {
    passwordErrorElementClass = 'session-error';
  }

  if (errors.email) {
    emailErrorElementClass = 'session-error';
  }

  if (errors.birthday) {
    birthdayErrorElementClass = 'session-error';
  }

  return {
    usernameErrorElementClass,
    passwordErrorElementClass,
    emailErrorElementClass,
    birthdayErrorElementClass
  };
};

export const generateErrorElement = (errors, errorText, errorField) => {
  return <h4 className='session-error'>{errors[errorField]}</h4>;
  };
