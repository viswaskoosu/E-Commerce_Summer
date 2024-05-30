import React from 'react';
import { useStateValue } from '../../Context/StateProvider';
import './ContactInfo.css'; // Import the CSS file

function ContactInfo() {
  const [{ user, userLoggedIn }] = useStateValue();

  return (!userLoggedIn? <div>404 not found</div> : 
    <div className="contactInfo">
      <h2>Welcome, {user.displayName}!</h2>
      <div className="infoContainer">
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
        <p><strong>Address:</strong> {user.address ? `${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.zip}, ${user.address.country}` : 'Not provided'}</p>
      </div>
    </div>
  );
}

export default ContactInfo;
