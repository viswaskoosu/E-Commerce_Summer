import React from "react";
import "./Footer.css";
import logo from '../Header/companyLogo.png'
function Footer() {
  return (
    <>
      <div className="footer">
        {/* <div className="disclaimer-area">
          <p className="disclaimer-desc">
            <b>The best E-Commerce site for Construction</b>
          </p>
        </div> */}
      </div>
      <div className="extra-data">
        <div className="link-section">
          <div className="first-row">
            <p className="bold">Get to Know Us</p>
            <p>Make Money with Us</p>
            <p>IIT Dharwad Payment</p>
            <p>Let Us Help You</p>
          </div>
          <div className="second-row">
            <p className="bold">About IIT Dharwad</p>
            <p>Sell products on IIT Dharwad</p>
            <p>IIT Dharwad Business Card</p>
            <p>IIT Dharwad and COVID-19</p>
          </div>
          <div className="third-row">
            <p className="bold">Connect with Us</p>
            <p>Sell apps on IIT Dharwad</p>
            <p>Shop with Points</p>
            <p>Shipping Rates & Policies</p>
          </div>
          <div className="fourth-row">
            <p className="bold">IIT Dharwad Cares</p>
            <p>Become an Affiliate</p>
            <p>Reload Your Balance</p>
            <p>Returns & Replacements</p>
          </div>
        </div>
        <div className="link-section2">
          <div className="first-one">
            <div className="first-row">
              <p className="bold">Get to Know Us</p>
              <p>Make Money with Us</p>
              <p>IIT Dharwad Payment</p>
              <p>Let Us Help You</p>
            </div>
            <div className="second-row">
              <p className="bold">About IIT Dharwad</p>
              <p>Sell products on IIT Dharwad</p>
              <p>IIT Dharwad Business Card</p>
              <p>IIT Dharwad and COVID-19</p>
            </div>
          </div>
          <div className="second-one">
            <div className="third-row">
              <p className="bold">Connect with Us</p>
              <p>Sell apps on IIT Dharwad</p>
              <p>Shop with Points</p>
              <p>Shipping Rates & Policies</p>
            </div>
            <div className="fourth-row">
              <p className="bold">IIT Dharwad Cares</p>
              <p>Become an Affiliate</p>
              <p>Reload Your Balance</p>
              <p>Returns & Replacements</p>
            </div>
          </div>
        </div>
        <div className="developer">
          <img src={logo} className="logo-img" />
          <div className="dev-data">
            <p>&copy; 2023 | Developed by </p>
            <a
              className="dev-link"
              href="https://www.iitdh.ac.in/"
              target="_blank" rel="noreferrer"
            >
              IIT Dharwad
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
