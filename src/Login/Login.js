import React, { useState } from "react";
//npm install react-router-dom
import { useNavigate, Link } from "react-router-dom";
//npm install bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Importing required Login.css
import "./Login.css";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    //User is displayed a error message if fields are empty or not validating
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    //Storing the data in LocalStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    //Logic to check if username and password are matching in localStorage
    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem("loggedIn", "true");
      setLoggedIn(true);
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container mt-5">
      <h2>Login</h2>
      {/*Login Form Fields */}
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
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
        <Link to="https://gmail.com" className="link mt-3 ms-3">
          Forgot password?
        </Link>
        <p className="mt-3">
          Don't have an account?
          <Link to="/signup" className="signup-link">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
