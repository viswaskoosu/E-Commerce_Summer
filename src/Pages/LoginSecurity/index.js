import React, { useState, useEffect } from 'react';
import './LoginSecurity.css'; // Import your CSS file for styling
import { useStateValue } from '../../Context/StateProvider';

function LoginSecurity() {
  const [{ user }, dispatch] = useStateValue();
  const [editMode, setEditMode] = useState(false);
  const [editValues, setEditValues] = useState({
    name: user.displayName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    password: '',
  });
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Fetch country codes on component mount
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        const countryData = data
          .filter((country) => country.idd?.root)
          .map((country) => ({
            name: country.name.common,
            code: `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}`,
          }));
        setCountries(countryData);
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  const handleEditToggle = () => {
    setEditMode(!editMode);
    // Reset edit values to current user values
    setEditValues({
      name: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: '',
    });
  };

  const handleSave = () => {
    // Dispatch action to update user info with editValues
    dispatch({
      type: 'UPDATE_USER_INFO',
      field: 'all',
      value: editValues,
    });
    setEditMode(false); // Exit edit mode after saving
  };

  const handleCountryChange = (e) => {
    const selectedCountry = countries.find((country) => country.name === e.target.value);
    setSelectedCountry(selectedCountry);
    if (selectedCountry) {
      // Automatically update phone number with country code
      setEditValues((prevValues) => ({
        ...prevValues,
        phoneNumber: `${selectedCountry.code} ${editValues.phoneNumber.replace(/^\+\d+\s/, '')}`,
      }));
    }
  };

  const handleInputChange = (field, value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return (
    <div className="loginSecurity">
      <div className="loginSecurity_header">
        <h2>Login & Security</h2>
        {!editMode ? (
          <button className="edit-button" onClick={handleEditToggle}>Edit</button>
        ) : (
          <button className="save-button" onClick={handleSave}>Save</button>
        )}
      </div>
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
            <div className="loginSecurity_phone">
              <select className="select-country" onChange={handleCountryChange}>
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name} ({country.code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                value={editValues.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                placeholder="Phone Number"
              />
            </div>
          ) : (
            <p>{user.phoneNumber}</p>
          )}
        </div>
        <div className="loginSecurity_item">
          <h3>Password</h3>
          {editMode ? (
            <input
              type="password"
              value={editValues.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
          ) : (
            <p>••••••••</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginSecurity;
