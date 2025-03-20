import React from 'react';
import '../Assets/Style/Popupmodal.css';
import pop1 from "../Assets/Images/ModelBg.jpeg";

const PopupModal = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Welcome to Our Franchise Website</h2>
        <p>World's highest visited franchise website network.</p>
        <img src={pop1} alt="popup image" />
        {/* <button className="close-btn" onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
};

export default PopupModal;