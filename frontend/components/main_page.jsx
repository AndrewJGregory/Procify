import React from 'react';

const MainPage = ({ username, type, logout }) => {
  return (
    <main id="main-page">
      <p>
        Welcome, {username} to the main page!
        You're looking at your {type}.
      </p>
      <button onClick={() => logout()}>Logout</button>
    </main>
  );
};

export default MainPage;
