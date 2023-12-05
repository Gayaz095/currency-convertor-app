import React from "react";
//npm install react-router-dom
import { Link } from "react-router-dom";
//Importing the required image and component
import logoImage from "./image.jpg";
import "./Navbar.css";

const Navbar = ({ loggedIn, handleLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="logo-link">
          <div className="logo-container">
            <img src={logoImage} alt="Logo" className="logo-img" />
          </div>
        </Link>
        <>
          <ul className="navbar-nav ms-auto">
            {/* Logic for displaying Logout button with respect to loggedIn variable */}
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
