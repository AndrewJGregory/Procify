import React from "react";

const AccountInfo = ({ username, logout }) => {
  return (
    <section className="account-info-page">
      <div className="account-info-container">
        <h3>Hello, {username}</h3>
        <button className="red-btn" onClick={() => logout()}>
          Logout
        </button>
      </div>
    </section>
  );
};

export default AccountInfo;
