import React from "react";
//Importing required components
import Dashboard from "../Dashboard/Dashboard";
import "./Home.css";

const Home = ({ loggedIn, setLoggedIn }) => {
  return (
    <div className="home-container mt-5">
      {/*Logic for if user is logged in or not */}
      {loggedIn ? (
        <Dashboard setLoggedIn={setLoggedIn} />
      ) : (
        <div className="welcome-message">
          <h2>Welcome</h2>
          <h5>To</h5>
          <h3>Currency Exchange App</h3>
          <p>You are not logged in. Please log in or sign up.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
