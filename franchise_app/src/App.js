import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Category from "./Pages/Category";
import Contact from "./Pages/Contact";
import Popup from "./Components/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, );

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/category" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <h1>Welcome to Our Website</h1>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
    
  );
}

export default App;
