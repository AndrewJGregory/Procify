import React from 'react';

export const generateInputErrorClasses = (errors, isSameEmail) => {
  let usernameInputErrorClass = '';
  let passwordInputErrorClass = '';
  let emailInputErrorClass = '';
  let confirmEmailInputErrorClass = '';

  if (errors.username) {
    usernameInputErrorClass = 'invalid-input';
  }

  if (errors.password) {
    passwordInputErrorClass = 'invalid-input';
  }

  if (errors.email) {
    emailInputErrorClass = 'invalid-input';
  }

  if (!isSameEmail) {
    confirmEmailInputErrorClass = 'invalid-input';
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
    confirmEmailInputErrorClass,
    errorHeader
  };
};

export const generateErrorElement = (errors, errorField) => {
  return <h4 className='session-error'>{errors[errorField]}</h4>;
};
