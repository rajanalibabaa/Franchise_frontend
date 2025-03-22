import React, { useState, useEffect } from 'react';
import BannerSec from '../Components/BannerSec.jsx';
import Navbar from '../Components/NavBar.jsx';
import PopupModal from '../Components/PopupModal.jsx';
import Footer from '../Components/Footer.jsx';
import GridViewBrand from '../Components/GridViewBrand.jsx';
<<<<<<< HEAD
import LoginPage from './LoginPage.js';

=======
import RegisterUser from './RegisterUser.js';
>>>>>>> 069027c4aa712f21c3663439e3000596c306aadc

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
  }

  return (
    <>
      {isPopupVisible && <PopupModal onClose={closePopup} />}
      <Navbar />
      <BannerSec />
      <GridViewBrand/>
<<<<<<< HEAD
      <LoginPage/>
=======
      <RegisterUser/>
>>>>>>> 069027c4aa712f21c3663439e3000596c306aadc
      <Footer/>
    </>
  );
}

export default HomePage;