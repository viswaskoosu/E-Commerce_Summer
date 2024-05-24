import React from 'react';
import { useStateValue } from '../../Context/StateProvider';

function ContactInfo() {
  const [{ user }] = useStateValue();

  return (
    <div>
      <h2>Welcome, {user.displayName}!</h2>
      <h3>Contact Information</h3>
      <p>Email: {user.email}</p>
      <p>Phone Number: {user.phoneNumber}</p>
      <p>Address: {user.address ? `${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.zip}, ${user.address.country}` : 'Not provided'}</p>
    </div>
  );
}

export default ContactInfo;
