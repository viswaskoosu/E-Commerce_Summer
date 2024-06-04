import React, { useState, useEffect } from "react";
import "./LoginSecurity.css";
import { useStateValue } from "../../Context/StateProvider";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import LoadingPage from "../../Components/LoadingPage";
import { putReq, postReq } from "../../getReq.js";
function LoginSecurity() {
  const [{ user }, dispatch] = useStateValue();
  const [editMode, setEditMode] = useState(false);
  const [editValues, setEditValues] = useState({
    name: user.displayName,
    email: user.email,
    phone: user.phone,
    password: "",
  });
  const [password, setPassword] = useState("");

  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSave = () => {
    let urlString = `/user/updatedetails?name=${editValues.name}&email=${editValues.email}&phone=${editValues.phone}`;
    if (editValues.password !== "") {
      urlString += `&password=${editValues.password}`;
    }
    putReq(setIsLoading, urlString)
      .then((responseData) => {
        if (responseData.success) {
          dispatch({
            type: "UPDATE_USER_INFO",
            field: "displayName",
            value: editValues.name,
          });
          dispatch({
            type: "UPDATE_USER_INFO",
            field: "email",
            value: editValues.email,
          });
          dispatch({
            type: "UPDATE_USER_INFO",
            field: "phone",
            value: editValues.phone,
          });
          alert("successful update");
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          alert("Couldn't update: " + error.response.data.error);
        } else {
          alert("Error in contacting server.");
        }
      })
      .finally(() => {
        setPassword("");
        setEditMode(false);
      }); // Exit edit mode after saving
    // window.location.reload();
  };

  // Handle password submit for edit mode toggle
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    postReq(setIsLoading, `/user/login`, {
      email: user.email,
      password: password,
    })
      .then((responseData) => {
        if (responseData.success) {
          setShowPasswordPrompt(false);
          setEditMode(true);
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          alert("Not authorized: " + error.response.data.error);
          setPassword("");
        } else {
          alert("Error in contacting server.");
        }
      });
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

  return isLoading ? (
    <LoadingPage />
  ) : (
    <>
      <Header />
      <div className="loginSecurity">
        <div className="loginSecurity_header">
          <h2>Login & Security</h2>
          {!editMode ? (
            <>
              {showPasswordPrompt ? (
                <button
                  className="edit-button" style={{backgroundColor: 'red'}}
                  onClick={() => setShowPasswordPrompt(false)}
                >
                  Cancel
                </button>
              ) : (
                <></>
              )}
              <button
                className="edit-button"
                onClick={() => setShowPasswordPrompt(true)}
              >
                Edit
              </button>
            </>
          ) : (
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
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
                onChange={(e) => handleInputChange("name", e.target.value)}
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
                onChange={(e) => handleInputChange("email", e.target.value)}
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
                onChange={(e) => handleInputChange("phone", e.target.value)}
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
                onChange={(e) => handleInputChange("password", e.target.value)}
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
