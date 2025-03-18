import React from "react";
import "../Style/Popup.css"; // Import CSS for styling
import FranchiseImage from "../Assests/Images/Franchise.jpeg"
function Popup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>✖</button>
        <img className="popupimg1" src={FranchiseImage} alt="Franchise" />

        </div>
    </div>
  );
}

export default Popup;
