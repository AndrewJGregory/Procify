import React from 'react';

const AccountInfo = ({ username, logout }) => {
  return (
    <section className='account-info'>
      <h3>Hello, {username}</h3>
      <button onClick={() => logout()}>Logout</button>
    </section>
  );
};

export default AccountInfo;
