import React, { useState, useRef } from 'react';
import { Search, } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import "../Assets/Style/HomePage.css"
import video1 from "../Assets/video/bg-vdo.mp4"


function BannerSec() {
  const [showDropdowns, setShowDropdowns] = useState(false);
  const [industry, setIndustry] = useState('');
  const [sector, setSector] = useState('');
  const [service, setService] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  
  // Define video sources
  const videos = [
    video1,video1,video1,video1,video1,video1

  ];

  const navigate = useNavigate();

  const handleScroll = (direction) => {
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < videos.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <>
      <div className="banner-container">
        <div className="banner">
          <div className="overlay">
            <h1>
              Welcome to <span className="highlight">Our Franchise</span> Website
            </h1>
            <p>World's highest visited franchise website network</p>

            <div className="button-group">
              <button className="toggle-btn" onClick={() => setShowDropdowns((prev) => !prev)}>
                Franchise
              </button>
              <button className="toggle-btn" onClick={() => navigate('/dealer')}>
                Dealer Distributer
              </button>
              <button className="toggle-btn" onClick={() => navigate('/partner')}>
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

                <button className="search-btn" onClick={() => navigate(`/results?industry=${industry}&sector=${sector}&service=${service}`)}>
                  <Search size={20} color="white" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

  
  

<div className='banner-div'>
  <div className='Video-contain'>
    <video className='Video-sec' key={currentIndex} ref={videoRef} src={videos[currentIndex]} controls />

    <div className="index-indicator">
      {currentIndex + 1} / {videos.length}
    </div>

    <button className="nav-btn prev-btn" onClick={() => handleScroll('prev')} disabled={currentIndex === 0}>
      ❮
    </button>

    <button className="nav-btn next-btn" onClick={() => handleScroll('next')} disabled={currentIndex === videos.length - 1}>
      ❯
    </button>
  </div>

  <div className='Content-sec'>
    
    
    <h4>Ask Free</h4>
    
<input class="input" name="text" placeholder="Enter Your Name" type="name" required></input>
<input class="input" name="text" placeholder="Enter Your Email" type="email" required></input>
<input class="input" name="text" placeholder="Enter Mobile No" type="text" required></input>

    {/* <input type="text" placeholder="Enter Your Name" />
    <input type="email" placeholder="Enter Your Email" />
    <input type="text" placeholder="Enter Mobile No" /> */}
    <button>Submit</button>
    <h4>Why Should I Register?</h4>
    <p>
      Get access to over 15000+ Franchise Business Opportunities. Network with the growing Business Community.
    </p>
    
  </div>
</div>


    
    </>
  );
}

export default BannerSec;
