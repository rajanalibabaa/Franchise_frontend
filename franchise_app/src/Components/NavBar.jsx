import React, { useState } from "react";
import { User,AlignJustify } from "lucide-react"; 
import "../Assets/Style/NavBar.css";

import img1 from "../Assets/Images/ModelBg.jpeg";


function Navbar ({ onClose })  {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true); // Manage popup visibility  rm -f .git/index.lock

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // Close the popup
    if (onClose) {
      onClose(); // If onClose is passed, trigger it
    }
  };

  return (
    <>
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            {/* Close Button */}
            <button className="close-btn" onClick={handleClosePopup}>✖</button>
            <img className="popupimg1" src={img1} alt="Franchise" />
          </div>
        </div>
      )}
      
      <nav className="navbar">
      <div className="sidebar">
        <label><AlignJustify/></label>
  </div>
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
    </>
  );
};

export default Navbar;
