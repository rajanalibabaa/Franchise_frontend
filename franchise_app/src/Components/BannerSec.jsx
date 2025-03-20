import React, { useState } from 'react'
import {Search} from "lucide-react";
import {useNavigate} from "react-router-dom"
import "../Assets/Style/HomePage.css"

function BannerSec() {
  const [showDropdowns, setShowDropdowns] = useState(false);
  const [industry, setIndustry] = useState("");
  const [sector, setSector] = useState("");
  const [service, setService] = useState("");

  const navigate = useNavigate();

  const handleFranchiseClick = () => {
    setShowDropdowns((prev) => !prev); // Toggle dropdowns
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleSearch = () => {
    if (industry && sector && service) {
      navigate(`/results?industry=${industry}&sector=${sector}&service=${service}`);
    } else {
      alert("Please select all fields before searching.");
    }
  };

  return (
    <div className="banner-container">
      <div className="banner">
        <div className="overlay">
          <h1>
            Welcome to <span className="highlight">Our Franchise</span> Website
          </h1>
          <p>World's highest visited franchise website network</p>

          <div className="button-group">
            <button className="toggle-btn" onClick={handleFranchiseClick}>
              Franchise
            </button>
            <button className="toggle-btn" onClick={() => handleNavigate("/dealer")}>
              Dealer Distributer
            </button>
            <button className="toggle-btn" onClick={() => handleNavigate("/partner")}>
              Channel Partner
            </button>
          </div>

          {showDropdowns && (
            <div className="dropdown-section">
              <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
                <option value="">Select Industry</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
              </select>

              <select value={sector} onChange={(e) => setSector(e.target.value)}>
                <option value="">Select Sector</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
              </select>

              <select value={service} onChange={(e) => setService(e.target.value)}>
                <option value="">Select Service/Product</option>
                <option value="Consulting">Consulting</option>
                <option value="Software">Software</option>
              </select>

              <button className="search-btn" onClick={handleSearch}>
                <Search size={20} color="white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerSec