import React from 'react';
import './LoginSecurity.css'; // Import your CSS file for styling
import { useStateValue } from '../../Context/StateProvider';

function LoginSecurity() {
  const [{ user }] = useStateValue();

  return (
    <div className="loginSecurity">
      <h2>Login & Security</h2>
      <div className="loginSecurity_info">
        <div className="loginSecurity_item">
          <h3>Name</h3>
          <p>{user.displayName}</p>
          <button>Edit</button>
        </div>
        <div className="loginSecurity_item">
          <h3>Email</h3>
          <p>{user.email}</p>
          <button>Edit</button>
        </div>
        <div className="loginSecurity_item">
          <h3>Mobile Number</h3>
          <p>{user.phoneNumber}</p>
          <button>Edit</button>
        </div>
        <div className="loginSecurity_item">
          <h3>Password</h3>
          <p>••••••••</p>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default LoginSecurity;
