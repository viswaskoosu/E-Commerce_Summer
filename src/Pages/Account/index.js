import React, { useState, useEffect } from 'react';
import './AccountPage.css';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Default from './default.png';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../../Context/StateProvider';
import PersonIcon from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PaymentIcon from '@mui/icons-material/Payment';
import HomeIcon from '@mui/icons-material/Home';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SecurityIcon from '@mui/icons-material/Security';

function AccountPage() {
  const [{ user }, dispatch] = useStateValue();
  const [image, setImage] = useState(""); 
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("basket");

    dispatch({
      type: "USER_LOGOUT",
    });
    navigate('/');
  };

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

  const iconStyle = { color: '#FFAD33' };

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
              <button onClick={logout} className="signout-btn">
                <ExitToAppIcon style={iconStyle} /> Sign out
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
                    <PersonIcon style={iconStyle} className="user-photo" />
                  </div>
                  <p className="users-name">{user ? `${user.displayName}` : ""}</p>
                </div>
                <Link to="/loginSecurity" className="accountPage_section">
                  <div className='flex-row-space-between'>
                    <h3>Login & Security</h3>
                    <SecurityIcon style={iconStyle} /> 
                  </div>
                    <p>Edit login, name, and mobile number</p>
                    </Link>
                <Link to='/contactinfo' className="accountPage_section">
                  <div className="contact-info">
                    <div className="mail-section">
                      <p className="mail-data">Contact Information</p>
                      <ContactMailIcon style={iconStyle} className="mail-photo" />
                    </div>
                    <div>
                      <p>{user.email ? `${user.email}` : "Please update your Email "}</p>
                      <p>{user.phone ? `${user.phone}` : "Please update your Mobile Number"}</p>
                      <p>{user && user.addresses.length > 0 ? `${user.addresses[0].street}, ${user.addresses[0].city}, ${user.addresses[0].state}, ${user.addresses[0].zip}, ${user.addresses[0].country}` : ""}</p>
                    </div>
                  </div>
                </Link>

                <Link to="/paymentmethods" className="accountPage_section">
                  <div className='flex-row-space-between'>
                  <h3> Payment Methods</h3>
                  <PaymentIcon style={iconStyle} />
                  </div>
                  {user && user.paymentMethods?.length > 0 ? (
                      <ul className="accountPage_list">
                        {user.paymentMethods.map((method) => (
                          <li key={method.id}>
                            <p>{method.type} ending in {method.last4} (Expires {method.expiration})</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No payment methods saved.</p>
                    )}

                </Link>
                
                <Link to="/addresses" className="accountPage_section">
                  <div className='flex-row-space-between'>
                    <h3> Your Addresses</h3>
                    <HomeIcon style={iconStyle} />
                  </div>
                    <p>Edit addresses and add</p>
                    </Link>
                <Link to="/contactUs" className="accountPage_section">
                <div className='flex-row-space-between'>
                <h3>Contact Us</h3>
                <SupportAgentIcon style={iconStyle} /> 
                  </div>
                    <p>Get in touch with us</p>
                    </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AccountPage;
