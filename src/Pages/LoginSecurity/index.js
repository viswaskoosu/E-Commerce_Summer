import React, { useState, useEffect } from 'react';
import './LoginSecurity.css';
import { useStateValue } from '../../Context/StateProvider';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';

function LoginSecurity() {
  const [{ user }, dispatch] = useStateValue();
  const [editMode, setEditMode] = useState(false);
  const [editValues, setEditValues] = useState({
    name: user.displayName,
    email: user.email,
    phone: user.phone,
    password: '',
  });
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const handleSave = () => {
    dispatch({
      type: 'UPDATE_USER_INFO',
      field: 'all',
      value: editValues,
    });
    setEditMode(false); // Exit edit mode after saving
    setIsPasswordCorrect(false); 
    window.location.reload();
  };

  // Handle password submit for edit mode toggle
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Validate the password (in a real application, call backend API)
    if (password === 'Viswas') {
      setIsPasswordCorrect(true);
      setShowPasswordPrompt(false);
      setEditMode(true);
    } else {
      alert('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  // Handle input change for editable fields
  const handleInputChange = (field, value) => {
    setEditValues({ ...editValues, [field]: value });
  };

  if (!user) {
    return (
      <Link to="/signin" className="accountPage_section">
        Sign In
      </Link>
    );
  }

  return (
    <>
      <Header/>
    <div className="loginSecurity">
      <div className="loginSecurity_header">
        <h2>Login & Security</h2>
        {!editMode ? (
          <button className="edit-button" onClick={() => setShowPasswordPrompt(true)}>Edit</button>
        ) : (
          <button className="save-button" onClick={handleSave}>Save</button>
        )}
      </div>
      {showPasswordPrompt && (
        <form className="password-prompt" onSubmit={handlePasswordSubmit}>
          <h3>Please enter your password to proceed:</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
      <div className="loginSecurity_info">
        <div className="loginSecurity_item">
          <h3>Name</h3>
          {editMode ? (
            <input
              type="text"
              value={editValues.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          ) : (
            <p>{user.displayName}</p>
          )}
          
        </div>
        <div className="loginSecurity_item">
          <h3>Email</h3>
          {editMode ? (
            <input
              type="email"
              value={editValues.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          ) : (
            <p>{user.email}</p>
          )}
          
        </div>
        <div className="loginSecurity_item">
          <h3>Mobile Number</h3>
          {editMode ? (
            <input
              type="tel"
              value={editValues.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="Phone Number"
            />
          ) : (
            <p>{user.phone}</p>
          )}
          
        </div>
        <div className="loginSecurity_item">
          <h3>Password</h3>
          {editMode ? (
            <input
              type="password"
              value={editValues.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="New Password"
            />
          ) : (
            <p>••••••••</p>
          )}
          
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginSecurity;
