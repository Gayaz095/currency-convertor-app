import React, { useState } from "react";
//npm install react-router-dom
import { useNavigate, Link } from "react-router-dom";
//Install and import necessary bootstrap and component
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";

const SignUp = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    //Handling if input fields are empty or not validating
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }
    //Storing data in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Sign Up successful!");
    //If successful then navigate to Login
    navigate("/login");
  };

  return (
    <div className="signup-container mt-5">
      <h2>Sign Up</h2>
      {/*Signup Form */}
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSignUp}>
          Sign Up
        </button>
        <p className="mt-3">
          Already have an account?
          <Link to="/login" className="link">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
