import React from "react";
import "./AccountPage.css"; // Import your CSS file for styling
import { Link } from "react-router-dom"; // Import Link for navigation
import { useStateValue } from "../../Context/StateProvider";
import Header from "../../Components/Header";

function AccountPage() {
  const [{ user, userLoggedIn }] = useStateValue();
  console.log(userLoggedIn, user);
  return !userLoggedIn ? (
    <div>404 not found</div>
  ) : (
    <>
      <Header />
      <div className="accountPage">
        <div className="accountPage_info">
          <h2>Welcome, {user.displayName}!</h2>

          {/* Contact Information Section */}
          <Link to="/contactInfo" className="accountPage_section">
            <h3>Contact Information</h3>
            <p>Email: {user.email}</p>
            <p>Phone Number: {user.phoneNumber}</p>
            <p>
              Address:{" "}
              {user.address
                ? `${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.zip}, ${user.address.country}`
                : "Not provided"}
            </p>
          </Link>

          {/* Payment Methods Section */}
          <Link to="/paymentmethods" className="accountPage_section">
            <h3>Payment Methods</h3>
            {user.paymentMethods.length > 0 ? (
              <ul className="accountPage_list">
                {user.paymentMethods.map((method) => (
                  <li key={method.id}>
                    {method.type} ending in {method.last4} (Expires{" "}
                    {method.expiration})
                  </li>
                ))}
              </ul>
            ) : (
              <p>No payment methods saved.</p>
            )}
          </Link>

          {/* Login & Security Section */}
          <Link to="/loginSecurity" className="accountPage_section">
            <h3>Login & Security</h3>
            <p>Edit login, name, and mobile number</p>
          </Link>

          {/* Your Addresses Section */}
          <Link to="/addresses" className="accountPage_section">
            <h3>Your Addresses</h3>
            <p>Edit addresses and add</p>
          </Link>

          {/* Contact Us Section */}
          <Link to="/contactUs" className="accountPage_section">
            <h3>Contact Us</h3>
            <p>Get in touch with us</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AccountPage;
