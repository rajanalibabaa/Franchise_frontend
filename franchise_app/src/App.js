import React, { useState, useEffect } from "react"; 
import Navbar from "./Components/Navbar";  
import Popup from "./Components/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false); 

  // Show popup automatically when the page loads
  useEffect(() => {
    setShowPopup(true);  
  }, []);  // Empty dependency array ensures it runs only once on mount

  return (
    <div>
      <Navbar />
      <h1>Welcome to My Website</h1>

      {/* Show Popup automatically on page load & when button is clicked */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default App;
