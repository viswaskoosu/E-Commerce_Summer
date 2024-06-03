import React, { useState, useEffect } from "react";
import "./LoginSecurity.css"; // Import your CSS file for styling
import { useStateValue } from "../../Context/StateProvider";
import Header from "../../Components/Header";
import ReactLoading from 'react-loading'
import { putReq } from "../../getReq";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function LoginSecurity() {
  const [{ user, userLoggedIn }, dispatch] = useStateValue();
  const [editField, setEditField] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [isLoading, setIsLoading] = useState(false)
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
            code: `${country.idd.root}${
              country.idd.suffixes ? country.idd.suffixes[0] : ""
            }`,
          }));
        setCountries(countryData);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleEditClick = (field, value) => {
    setEditField(field);
    setEditValue(value);
  };

  const handleSave = () => {
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
