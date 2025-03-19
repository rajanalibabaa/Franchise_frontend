import React, { useState } from 'react'
import {Search} from "lucide-react";
import "../Assets/Style/HomePage.css"

function BannerSec() {
    const [showDropdown, setShowDropdown] = useState(false);

  return (
<div className="banner-container">
      {/* Background Image */}
      <div className="banner">
        <div className="overlay">
          <h1>
            Welcome to <span className="highlight">Our Franchise</span> Website
          </h1>
          <p>World's highest visited franchise website network</p>

          {/* Toggle Buttons */}
          <div className="button-group">
            <button className="toggle-btn" onClick={() => setShowDropdown(!showDropdown)}>
              Franchise
            </button>
            <button className="toggle-btn" onClick={() => setShowDropdown(!showDropdown)}>
              Dealer Distributer
            </button>
            <button className="toggle-btn" onClick={() => setShowDropdown(!showDropdown)}>
              Channel Partner
            </button>
          </div>

          {/* Dropdowns and Search Button - Show When Clicked */}
          {showDropdown && (
            <div className="dropdown-section">
              <select>
                <option>Select Industry</option>
                <option>Technology</option>
                <option>Finance</option>
              </select>
              <select>
                <option>Select Sector</option>
                <option>Health</option>
                <option>Education</option>
              </select>
              <select>
                <option>Service</option>
                <option>Consulting</option>
                <option>Software</option>
              </select>

              {/* Search Button */}
              <button className="search-btn">
                <Search size={20} color="white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>  )
}

export default BannerSec