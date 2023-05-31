import React from 'react';
import './Account.css';

const Account = ({ user, onUpdateAddress, onPasswordChange }) => {
  return (
    <div>
      <h2>Account</h2>
      <h3>Welcome, {user.name}!</h3>
      <h4>Shipping Address</h4>
      <p>{user.address}</p>
      <h4>Change Address</h4>
      <input
        type="text"
        value={user.address}
        onChange={(e) => onUpdateAddress(e.target.value)}
      />
      <h4>Change Password</h4>
      <input type="password" placeholder="Current Password" />
      <input type="password" placeholder="New Password" />
      <button onClick={onPasswordChange}>Change Password</button>
    </div>
  );
};

export default Account;
