import React, { useState, useEffect } from 'react';
import './LoginSecurity.css';
import { useStateValue } from '../../Context/StateProvider';
import { Link } from 'react-router-dom';

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
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  // Fetch country codes on component mount
  useEffect(() => {
    //check user is there??
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryData = data
          .filter((country) => country.idd?.root)
          .map((country) => ({
            name: country.name.common,
            code: `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}`,
          }))
          .sort((a, b) => a.name.localeCompare(b.name)); // Sort countries alphabetically
        setCountries(countryData);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleEditToggle = () => {
    if (isPasswordCorrect) {
      setEditMode(!editMode);
      // Reset edit values to current user values
      setEditValues({
        name: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: '',
      });
    } else {
      setShowPasswordPrompt(true);
    }
  };

  const handleSave = () => {
<<<<<<< HEAD
    // Dispatch action to update user info with editValues
    dispatch({
      type: 'UPDATE_USER_INFO',
      field: 'all',
      value: editValues,
    });
    setEditMode(false); // Exit edit mode after saving
    setIsPasswordCorrect(false); // Reset password correctness
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Validate the password (in a real application, you would call your backend API here)
    if (password === user.password) {
      setIsPasswordCorrect(true);
      setShowPasswordPrompt(false);
      setEditMode(true);
    } else {
      alert('Incorrect password. Please try again.');
      setPassword('');
    }
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

  if (!user) {
    return (
      <Link to="/signin" className="accountPage_section">
        Sign In
      </Link>
    );
  }

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
              placeholder="New Password"
            />
          ) : (
            <p>••••••••</p>
          )}
        </div>
      </div>
=======
    const serverEditField = editField==='displayName'? 'name' : editField
    putReq(setIsLoading, `/user/updatedetails?${serverEditField}=${editValue}`, {})
    .then((responseData) => {
      if (responseData.success){
      dispatch({
        type: "UPDATE_USER_INFO",
        field: editField,
        value: editValue,
      });
      toast.success('Updated successfully')
      // alert('Updated successfully')
    }
    }
    )
    .catch((err) => alert(err))
    .finally(() => {
      setEditField(null);
    })
  };

  const handleCountryChange = (e) => {
    const selectedCountry = countries.find(
      (country) => country.name === e.target.value
    );
    setSelectedCountryCode(selectedCountry ? selectedCountry.code : "");
  };

  return !userLoggedIn ? (
    <div>404 not found</div>
  ) : isLoading ? (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactLoading type="spin" color="#FFAD33" height={200} width={100} />
>>>>>>> 281c1a8bc6406933bd39a5d6f96a1cb6f5bf28b2
    </div>
  ) : (
    <>
      <Header />
      <div className="loginSecurity">
        <h2>Login & Security</h2>
        <div className="loginSecurity_info">
          {editField === "displayName" ? (
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
              <button onClick={() => handleEditClick("displayName", user.displayName)}>
                Edit
              </button>
            </div>
          )}
          {editField === "email" ? (
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
              <button onClick={() => handleEditClick("email", user.email)}>
                Edit
              </button>
            </div>
          )}
          {editField === "phone" ? (
            <div className="loginSecurity_item">
              <h3>Mobile Number</h3>
              <div className="loginSecurity_phone">
                {/* <select onChange={handleCountryChange}>
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name} ({country.code})
                    </option>
                  ))}
                </select> */}
                <input
                  type="tel"
                  // value={editValue.replace(selectedCountryCode, "")}
                  // onChange={(e) =>
                  //   setEditValue(selectedCountryCode + e.target.value)
                  // }
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  placeholder="Phone Number"
                />
              </div>
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditField(null)}>Cancel</button>
            </div>
          ) : (
            <div className="loginSecurity_item">
              <h3>Mobile Number</h3>
              <p>{user.phone}</p>
              <button
                onClick={() => handleEditClick("phone", user.phone)}
              >
                Edit
              </button>
            </div>
          )}
          {editField === "password" ? (
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
              <button onClick={() => handleEditClick("password", "")}>
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginSecurity;

