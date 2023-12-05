import React, { useState } from "react";
//npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Importing the required Components
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
//npm install bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //A variable loggedIn to keep track of user logged in status
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  //Logout Logic
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  return (
    <Router>
      {/* Navbar */}
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      {/* Routing Logic */}
      <Routes>
        <Route
          path="/"
          element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route
          path="/dashboard"
          element={<Dashboard setLoggedIn={setLoggedIn} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
