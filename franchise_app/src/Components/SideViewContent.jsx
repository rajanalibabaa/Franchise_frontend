import React, { useState } from "react";
import {Search,Facebook,Twitter,Instagram,Linkedin, X} from "lucide-react"
import {useNavigate} from 'react-router-dom'; 
import { ChevronDown, ChevronRight } from "lucide-react";
import "../Assets/Style/SidebarView.css";


const categories = [
  {
    name: "automotive",
    label: "Automotive",
    subCategories: [
{
        name: "automobileRelated",
        label: "Automobile Related",
        items: [
          "Automobile Accessories",
          "Automobile Garage Related",
          "Automobile Maintenance Related",
          "Automobile Spares / Tyre",
          "Road Safety Equipments",
          "Security & Helpline Services",
          "Web Based/Online Platform",
        ],
      },
      {
        name: "commercialVehicles",
        label: "Commercial Vehicles",
        items: [
          "Commercial Vehicles Bus/Trucks",
          "Commercial Electric Vehicles (EV)",
          "Off Road / All Terrain Vehicles",
          "Three Wheeler (Auto) Showroom",
          "Tractors",
        ],
      },
      {
        name: "fourWheeler",
        label: "Four Wheeler",
        items: [
          "Car Exterior Parts",
          "Car Interiror Accessories",
          "Car Interior Spare Parts",
          "Car Maintanance & Repair Services",
          "Car Rental",
          "Car Reselling",
          "Car Showroom",
          "Car Wash / Ceramic Coating / Detailing",
          "Electirc Vehicles Four Wheelers()EV",
        ],
      },
    ],
  },
  {
    name: "beauty",
    label: "Beauty & Health",
    subCategories: [
{
        name: "beauty aesthetics & supplies",
        label: "Beauty Aesthetics & Suplies",
        items: [
          "Bath Products",
          "Beauty Equipments",
          "Beauty Salons/Unisex Salons/Spa",
          "Cosmetic Accessories",
          "Cosmetic & Beauty Product Stores",
          "Pet Grooming",
          "Tattoo, Piercing & Nail Art",
        ],
      },
      {
        name: "healthcare",
        label: "Health Care",
        items: [
          "Ayurvedic, Herbal & Organic Products",
          "Clinics & Nursing Homes",
          "Healthcare Products",
          "Hospitals",
          "Pharmacies",
        ],
      },
      {
        name: "wellness",
        label: "Wellness",
        items: [
          "Diet Consultancy",
          "Gyms And Fitness Centres",
          "Massage Centres",
          "Medical Spas/Med Spas/Medi Spas",
          "Medidation Centre",
          "Physiotherapy Centre",
          "Slimming Center",
          "Spas",
          "Yoga Classes",
        ],
      },
    ],
  },
  {
    name: "business services",
    label: "Business Services",
    subCategories: [
{
        name: "advertisement",
        label: "Advertisement & Media Services",
        items: [
          "Ad Agencies & Collection Centres",
          "Digital Media & Internet Marketing",
          "Public Relations (PR)",
          "Publications & Print Media",
          "TV Channel/Network",
          
        ],
      },
      {
        name: "consultancy",
        label: "Consultancy",
        items: [
          "BPO",
          "Business",
          "Career Counseling",
          "Financial",
          "HR & Recruitment",
          "Immigration",
          "Legal",
          "Matrimonial",
          "Others Consultancy",
          "Real Estate",
          "Service For SMEs",
          "Technology",
        ],
      },
      {
        name: "financial",
        label: "Financial",
        items: [
          "Accounting & Auditing Serices",
          "Equity & Debt Providers",
          "Finance Advisors & Brokers",
          "Financial Investment & Trading",
          "Foreign Exchange (FOREX)",
          "Insurance",
          "Microfinance",
          "Non Banking Financial Company(NBFC)",
          "Others Financial",
          "Payment Solution Services",
          "Post Office Services",
          "Tax Consulting Services",
          "Wealth Management",
        ],
      },
      {
        name: "household",
        label: "Household Services",
        items: [
          "Electrical & Plumbing Services",
          "Facility Management",
          "Gardening Services",
          "Home Appliances Repair Services",
          "Home Renovation Services",
          "Home Safety & Security",
          "Housekeeping",
          "Institutional/Facility Cleaning",
          "Laundry & Dry Cleaning",
          "Pest Control",
          "Repair Services",
          "Tax Consulting Services",
          "Wealth Management",
        ],
      },
    ],
  },
  
];
  
const Sidebar = ({isOpen, toggleSidebar}) => {
  const [openCategories, setOpenCategories] = useState({
    automotive: true,
    automobileRelated: true,
    commercialVehicles: false,
    fourWheeler: false,
  });

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };


  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}><X/></button>
      <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>
            <Search size={24} />
          </button>
        </div>
        
        <div class="content-section">
        <h3 onClick={() => handleNavigate("/allcategories")}>Franchise</h3>
        <h3 onClick={() => handleNavigate("/dealer")}>Dealer & Distributor</h3>
        <h3 onClick={() => handleNavigate("/partner")}>Channel</h3>
       </div>

       <div>
        <h2>Franchise Categories</h2>
       </div>
         <div>
      {categories.map((category) => (
        <div key={category.name}>
          <h3 className="category-header" onClick={() => toggleCategory(category.name)}>
            {openCategories[category.name] ? <ChevronDown size={24} /> : <ChevronRight size={24} />} {category.label}
          </h3>
          {openCategories[category.name] &&
            category.subCategories.map((sub) => (
              <div key={sub.name}>
                <h4 className="category-header" onClick={() => toggleCategory(sub.name)}>
                  {openCategories[sub.name] ? <ChevronDown size={24} /> : <ChevronRight size={24} />} {sub.label}
                </h4>
                {openCategories[sub.name] && (
                  <ul>
                    {sub.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                 )}

                 
                
              </div>
            ))}
        </div>
      ))}
    </div>
            
          
          <div className="sidebar-footer">
          <button onClick={() => window.open("https://www.facebook.com", "_blank")}><Facebook size={24} /></button>
          <button onClick={() => window.open("https://twitter.com", "_blank")}><Twitter size={24} /></button>
          <button onClick={() => window.open("https://www.instagram.com", "_blank")}><Instagram size={24} /></button>
          <button onClick={() => window.open("https://www.linkedin.com", "_blank")}><Linkedin size={24}/></button>
        </div>

        <div class="footer-links">
           <a href="#">About Us</a>
           <a href="#">Contact</a>
           <a href="#">Feedback</a>
          
</div>
      </div>
  );
}

export default Sidebar;