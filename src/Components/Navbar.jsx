import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>PRIYA'S HOSPITAL</h2>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/medical">Medical Service</Link>
        <Link to="/health-package">Health Packages</Link>
        {!isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <button className="logout-button" onClick={handleLogout}>
            <span className="user-icon">{username.charAt(0).toUpperCase()}</span> Logout
          </button>
        )}
      </div>
    </nav>
  );
}
