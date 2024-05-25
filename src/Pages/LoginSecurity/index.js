import React, { useState } from 'react';
import './LoginSecurity.css'; // Import your CSS file for styling
import { useStateValue } from '../../Context/StateProvider';

function LoginSecurity() {
  const [{ user }, dispatch] = useStateValue();
  const [editField, setEditField] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleEditClick = (field, value) => {
    setEditField(field);
    setEditValue(value);
  };

  const handleSave = () => {
    dispatch({
      type: 'UPDATE_USER_INFO',
      field: editField,
      value: editValue,
    });
    setEditField(null);
  };

  return (
    <div className="loginSecurity">
      <h2>Login & Security</h2>
      <div className="loginSecurity_info">
        {editField === 'name' ? (
          <div className="loginSecurity_item">
            <h3>Name</h3>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setEditField(null)}>Cancel</button>
          </div>
        ) : (
          <div className="loginSecurity_item">
            <h3>Name</h3>
            <p>{user.displayName}</p>
            <button onClick={() => handleEditClick('name', user.displayName)}>Edit</button>
          </div>
        )}
        {editField === 'email' ? (
          <div className="loginSecurity_item">
            <h3>Email</h3>
            <input
              type="email"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setEditField(null)}>Cancel</button>
          </div>
        ) : (
          <div className="loginSecurity_item">
            <h3>Email</h3>
            <p>{user.email}</p>
            <button onClick={() => handleEditClick('email', user.email)}>Edit</button>
          </div>
        )}
        {editField === 'phoneNumber' ? (
          <div className="loginSecurity_item">
            <h3>Mobile Number</h3>
            <input
              type="tel"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setEditField(null)}>Cancel</button>
          </div>
        ) : (
          <div className="loginSecurity_item">
            <h3>Mobile Number</h3>
            <p>{user.phoneNumber}</p>
            <button onClick={() => handleEditClick('phoneNumber', user.phoneNumber)}>Edit</button>
          </div>
        )}
        {editField === 'password' ? (
          <div className="loginSecurity_item">
            <h3>Password</h3>
            <input
              type="password"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setEditField(null)}>Cancel</button>
          </div>
        ) : (
          <div className="loginSecurity_item">
            <h3>Password</h3>
            <p>••••••••</p>
            <button onClick={() => handleEditClick('password', '')}>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSecurity;
