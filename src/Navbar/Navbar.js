import React from "react";
//npm install react-router-dom
import { Link } from "react-router-dom";
//Importing the required component and image
import logoImage from "./image.jpg";
import "./Navbar.css";

const Navbar = ({ loggedIn, handleLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="logo-link">
          <div className="logo-container">
            <img src={logoImage} alt="Your Logo" className="logo-img" />
          </div>
        </Link>
        <>
          <ul className="navbar-nav ms-auto">
            {loggedIn ? (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </>
      </div>
    </nav>
  );
};

export default Navbar;
