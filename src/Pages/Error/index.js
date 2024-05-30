import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import error from "../imgs/error.png";
import "./Error.css";
import error from './error.png';
function Error() {
  document.title = "404! Page not found";

  return (
    <> <div className="main">

        <div className="error-image">
            <img src={error} alt="error" />
        </div>
        <div className="error-page">
            <p className="big-error">404</p>
            <p className="medium-error">Something went</p>
            <p className="wrong">WRONG!</p>
            {/* Use Link component to navigate to homepage */}
            <Link to="/" className="home">
                <button className="back-home">Back to Homepage</button>
            </Link>
        </div>
    </div>
    </>
  );
}

export default Error;
