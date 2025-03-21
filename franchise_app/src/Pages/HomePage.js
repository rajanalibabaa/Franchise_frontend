import React, { useState, useEffect } from 'react';
import BannerSec from '../Components/BannerSec.jsx';
import Navbar from '../Components/NavBar.jsx';
import PopupModal from '../Components/PopupModal.jsx';
import Footer from '../Components/Footer.jsx';
import GridViewBrand from '../Components/GridViewBrand.jsx';

function HomePage() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem('popupShown');
    if (!popupShown) {
      setIsPopupVisible(true);
      sessionStorage.setItem('popupShown', 'true');
    }
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      {isPopupVisible && <PopupModal onClose={closePopup} />}
      <Navbar />
      <BannerSec />
      <GridViewBrand/>
      <Footer/>
    </>
  );
}

export default HomePage;