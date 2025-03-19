import React, { useState } from "react";
import { User } from "lucide-react"; // Lucide icon for profile
import "../Style/Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MR FRANCHISE</div>

      <div className="nav-right">
        <div className="nav-links">
          <a href="#category">Category</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>

        <div className="profile" onClick={toggleMenu}>
          {isLoggedIn ? (
            <User className="profile-icon" />
          ) : (
            <span className="login-text">👤User</span>
          )}

          {menuOpen && (
            <div className="profile-menu">
              {!isLoggedIn ? (
                <>
                  <button onClick={() => alert("Create Account Clicked")}>
                    Create an Account
                  </button>
                  <button onClick={() => setIsLoggedIn(true)}>Log In</button>
                </>
              ) : (
                <button onClick={() => setIsLoggedIn(false)}>Sign Out</button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
