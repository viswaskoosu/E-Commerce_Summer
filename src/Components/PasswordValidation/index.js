import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './PasswordValidation.css';
import { useStateValue } from '../../Context/StateProvider';

function PasswordValidation() {
  const [{ user }] = useStateValue();
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Validate the password (in a real application, you would call your backend API here)
    if (password === user.password) { // Replace with the actual password validation logic
      navigate('/loginSecurity/edit');
    } else {
      alert('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="passwordValidation">
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
    </div>
  );
}

export default PasswordValidation;
