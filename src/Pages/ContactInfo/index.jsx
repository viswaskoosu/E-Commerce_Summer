import React, { useEffect } from "react";
import { useStateValue } from "../../Context/StateProvider";
import "./ContactInfo.css"; // Import the CSS file
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";

function ContactInfo() {
  const [{ user, userLoggedIn }] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoggedIn) {
      navigate('/error');
    }
  }, [userLoggedIn, navigate]);

  if (!userLoggedIn) {
    return null; // or a loading spinner, or any fallback UI
  }

  return (
    <>
      <Header />
      <div className="contactInfo">
        <h2>Welcome, {user.displayName}!</h2>
        <div className="infoContainer">
          <h3>Contact Information</h3>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {user.phone}
          </p>
          <p>
            <strong>Address:</strong>{" "}
            {user.address
              ? `${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.zip}, ${user.address.country}`
              : "Not provided"}
          </p>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
