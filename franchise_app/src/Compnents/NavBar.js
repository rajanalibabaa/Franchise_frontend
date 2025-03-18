import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft ,User, ChevronDown} from "lucide-react";
import "../Assests/Style/NavBar.css"; // Import Navbar styles

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state


  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">MR FRANCHISE</Link>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
         <ArrowLeft size={24} className="navbar-icon" />
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          {/* <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li> */}
          <li><Link to="/category" onClick={() => setIsOpen(false)}>Category</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        </ul>
        <div className="profile-dropdown">
            <div 
              className="profile-icon" 
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <User size={20} />
              <ChevronDown size={16} />
            </div>

            {dropdownOpen && (
              <div className="dropdown-menu">
                {!isLoggedIn ? (
                  <>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/register">Sign Up</Link>
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
}

export default Navbar;