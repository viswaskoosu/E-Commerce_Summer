import React, { useState, useEffect } from 'react';
import './AccountPage.css';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Default from './default.png';
import USER from './user.png';
import contact from './contact.png';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../../Context/StateProvider';

function AccountPage() {
  const [{ user }] = useStateValue();
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  document.title = "Profile section";

  const checkDP = () => {
    if (user && user.photoURL && user.photoURL.includes("https")) {
      setImage(user.photoURL);
    } else if (user && user.photoURL && user.photoURL.includes("http")) {
      const newImage = user.photoURL.replace(/^http:\/\//i, "https://");
      setImage(newImage);
    } else {
      setImage(Default);
    }
  };

  useEffect(() => {
    checkDP();
  }, [user]);

  return (
    <>
      <Header />
      <div className="profile-section" style={{ height: user ? 'fit-content' : '70vh' }}>
        <div className={`account-section ${user ? 'animate' : ''}`}>
          <div className="top-section">
            <p className="welcome-mssg">{user ? `Welcome, ${user.displayName}` : ""}</p>
          </div>
          <div className="account-section2">
            <div className="left-account-section">
              <img src={image} className="profile-img" alt="Profile" />
              <p className="profile-name">{user ? `${user.displayName}` : ""}</p>
              <p className="profile-email">{user ? `${user.email}` : ""}</p>
              <button
                onClick={() => navigate("/signup")}
                className="signout-btn"
              >
                Sign out
              </button>
            </div>
            <div className="right-account-section">
              <p className="personal-info-head">Personal Information</p>
              <p className="personal-info-desc">
                Manage your personal information, including your contact details.
              </p>
              <div className="personal-user-data">
                <div className="personal-name">
                  <div className="name-section">
                    <p className="name-data">Name</p>
                    <img src={USER} className="user-photo" alt="User Icon" />
                  </div>
                  <p className="users-name">{user ? `${user.displayName}` : ""}</p>
                </div>
                <div className="personal-mail">
                  <div className="mail-section">
                    <p className="mail-data">Contact</p>
                    <img src={contact} className="mail-photo" alt="Contact Icon" />
                  </div>
                  <p className="users-mail">{user ? `${user.email.slice(0, 15) + "..."}` : ""}</p>
                </div>
              </div>

              {/* Additional sections */}
              <Link to="/contactInfo" className="accountPage_section">
                <h3>Contact Information</h3>
                <p>Email: {user.email}</p>
                <p>Phone Number: {user.phoneNumber}</p>
                <p>Address: {user.addresses[0].street}, {user.addresses[0].city}, {user.addresses[0].state}, {user.addresses[0].zip}, {user.addresses[0].country}</p>
              </Link>
              <Link to="/paymentmethods" className="accountPage_section">
                <h3>Payment Methods</h3>
                {user.paymentMethods.length > 0 ? (
                  <ul className="accountPage_list">
                    {user.paymentMethods.map((method) => (
                      <li key={method.id}>
                        {method.type} ending in {method.last4} (Expires {method.expiration})
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No payment methods saved.</p>
                )}
              </Link>
              <Link to="/loginSecurity" className="accountPage_section">
                <h3>Login & Security</h3>
                <p>Edit login, name, and mobile number</p>
              </Link>
              <Link to="/addresses" className="accountPage_section">
                <h3>Your Addresses</h3>
                <p>Edit addresses and add</p>
              </Link>
              <Link to="/contactUs" className="accountPage_section">
                <h3>Contact Us</h3>
                <p>Get in touch with us</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AccountPage;
