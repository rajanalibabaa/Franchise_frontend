import React, { useState } from "react";
import {Search,ChevronUp,ChevronDown,Facebook,Twitter,Instagram, X} from "lucide-react"
import "../Assets/Style/sidebar.css"

const categories = [
    { name: "Automotive", subcategories: ["Car Repair", "Car Rental", "Spare Parts"] },
    { name: "Beauty & Health", subcategories: ["Salon", "Spa", "Wellness"] },
    { name: "Business Services", subcategories: ["Consulting", "Marketing", "Legal Services"] },
    { name: "Dealers & Distributors", subcategories: ["Wholesale", "Retail", "Supply Chain"] },
    { name: "Education", subcategories: ["Online Courses", "Tutoring", "Certifications"] },
  ];
function Sidebar({ isOpen, toggleSidebar }) {
    const [expanded, setExpanded] = useState({});

  const toggleCategory = (category) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
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
        <p>Franchise Categories</p>
          <ul>
            {categories.map((category) => (
              <li key={category.name}>
                <button className="category-item" onClick={() => toggleCategory(category.name)}>
                  {category.name}
                  {expanded[category.name] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {expanded[category.name] && (
                  <ul className="subcategory-list">
                    {category.subcategories.map((sub) => (
                      <li key={sub} className="subcategory-item">{sub}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="sidebar-footer">
          <button><Facebook size={24} /></button>
          <button><Twitter size={24} /></button>
          <button><Instagram size={24} /></button>
        </div>
      </div>
  );
}

export default Sidebar;