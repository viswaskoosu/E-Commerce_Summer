import React, { useState, useEffect } from "react";
import "./LoginSecurity.css";
import { useStateValue } from "../../Context/StateProvider";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import LoadingPage from "../../Components/LoadingPage";
import { putReq, postReq } from "../../getReq.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#808080",
    },
    textPrimary: {
      main: "#000000",
    },
  },
});

function LoginSecurity() {
  const [{ user }, dispatch] = useStateValue();
  const [editMode, setEditMode] = useState(false);
  const [editValues, setEditValues] = useState({
    name: user.displayName,
    email: user.email,
    phone: user.phone,
    password: "",
  });
  const [initialValues, setInitialValues] = useState({});
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setInitialValues({
      name: user.displayName,
      email: user.email,
      phone: user.phone,
      password: "",
    });
  }, [user]);

  const handleSave = () => {
    if (editValues.password !== reEnterPassword) {
      toast.error("Passwords do not match");
      return;
    }

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
          toast.success("Successful update");
          setEditMode(false); // Exit edit mode after save
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          toast.error("Couldn't update: " + error.response.data.error);
        } else {
          toast.error("Error in contacting server.");
        }
      })
      .finally(() => {
        setPassword("");
        setReEnterPassword("");
      });
  };

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
          toast.error("Not authorized: " + error.response.data.error);
        } else {
          toast.error("Error in contacting server.");
        }
      });
  };

  const handleInputChange = (field, value) => {
    setEditValues({ ...editValues, [field]: value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditValues({
      name: initialValues.name,
      email: initialValues.email,
      phone: initialValues.phone,
      password: "",
    });
    setPassword("");
    setReEnterPassword("");
    setShowPasswordPrompt(false);
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
      <ThemeProvider theme={theme}>
        <div className="loginSecurity">
          <div className="loginSecurity_header">
            <h2>Login & Security</h2>
            {!editMode ? (
              <div className="cancel-edit">
                <>
                  {showPasswordPrompt ? (
                    <div>
                      <button
                        className="edit-button"
                        style={{ backgroundColor: 'red' }}
                        onClick={() => setShowPasswordPrompt(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                  <div>
                    <button
                      className="edit-button"
                      onClick={() => setShowPasswordPrompt(true)}
                    >
                      Edit
                    </button>
                  </div>
                </>
              </div>
            ) : (
                <>
              <div className="cancel-edit">
                  {showPasswordPrompt ? (
                    <div>
                      <button
                        className="edit-button"
                        style={{ backgroundColor: 'red' }}
                        onClick={() => setShowPasswordPrompt(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                  
              </div>
              <div style={{ display: 'flex' }}>
                <div>
                  <button
                    className="edit-button"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>
                <button className="save-button" onClick={handleSave}>
                  Save
                </button>
              </div>

              
              </>
            )}
          </div>
          {showPasswordPrompt && (
            <form className="password-prompt" onSubmit={handlePasswordSubmit}>
              <h3>Please enter your password to proceed:</h3>
              <TextField
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                fullWidth
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        edge="end"
                        style={{ color: 'grey' , backgroundColor:"white"}}
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button type="submit" style={{ marginTop: '10px' }}>Submit</Button>
            </form>
          )}
          <div className="loginSecurity_info">
            <div className="loginSecurity_item">
              <h3>Name</h3>
              {editMode ? (
                <TextField
                  type="text"
                  value={editValues.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              ) : (
                <p>{user.displayName}</p>
              )}
            </div>
            <div className="loginSecurity_item">
              <h3>Email</h3>
              {editMode ? (
                <TextField
                  type="email"
                  value={editValues.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              ) : (
                <p>{user.email}</p>
              )}
            </div>
            <div className="loginSecurity_item">
              <h3>Mobile Number</h3>
              {editMode ? (
                <TextField
                  type="tel"
                  value={editValues.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Phone Number"
                  fullWidth
                  variant="outlined"
                />
              ) : (
                <p>{user.phone}</p>
              )}
            </div>
            <div className="loginSecurity_item">
              <h3>New Password</h3>
              {editMode ? (
                <TextField
                  type={showPassword ? "text" : "password"}
                  value={editValues.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  placeholder="New Password"
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              ) : (
                <p>••••••••</p>
              )}
            </div>
            {editMode && (
              <div className="loginSecurity_item">
                <h3>Re-enter Password</h3>
                <TextField
                  type={showPassword ? "text" : "password"}
                  value={reEnterPassword}
                  onChange={(e) => setReEnterPassword(e.target.value)}
                  placeholder="Re-enter Password"
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default LoginSecurity;
