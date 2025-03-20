import React, { useState } from "react";
import { User, AlignJustify } from "lucide-react";
import Sidebar from "./SideViewContent";
import "../Assets/Style/NavBar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarView, setSidebarView] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSidebar = () => {
    setSidebarView(!sidebarView);
  };

  return (
    <nav className="navbar">
      <div className="sidebar-toggle">
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          <AlignJustify size={24} />
        </button>
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
      <Sidebar isOpen={sidebarView} toggleSidebar={toggleSidebar} />
    </nav>
  );
}

export default Navbar;