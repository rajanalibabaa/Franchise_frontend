import React from 'react';
import "../Assets/Style/footer.css";
import logo from '../Assets/Images/Mrlogo.jpg';
import {Facebook, Instagram, Linkedin,Twitter} from 'lucide-react'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="footer-section">
        <div className='footer-logo' >
         <img src={logo} alt="Company Logo"/>
         <p className="footer-description">
            Your trusted franchise business expert, helping you grow and expand efficiently.
            <div class="social-icons">
            <Twitter/>
            <Facebook/>
            <Linkedin/>
            <Instagram/>
        </div>
          </p>
          
          </div>
        </div>
      
      <div className="footer-section">
          <h3>Beauty & Health</h3>
          <ul>
            <li><a href="/beauty asthetics & supplies">Beauty Asthetics & Supplies</a></li>
            <li><a href="/healthcare">Health Care</a></li>
            <li><a href="/wellnes">Wellness</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Business Services</h3>
          <ul>
            <li><a href="/advertisement & media services">Advertisement & Media Services</a></li>
            <li><a href="/consultancy">Consultancy</a></li>
            <li><a href="/it services">IT Services</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: contact@mywebsite.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© 2025 MyWebsite. All rights reserved by Mr.Franchise</p>
      </div>
    </footer>

  )
}

export default Footer