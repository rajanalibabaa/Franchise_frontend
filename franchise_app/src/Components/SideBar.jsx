import { useState } from "react";
import { Menu, X, Search, ChevronDown, ChevronUp, Facebook, Twitter, Instagram } from "lucide-react";
import "../Assets/Style/Sidebar.css";
const categories = [
  { name: "Automotive", subcategories: ["Car Repair", "Car Rental", "Spare Parts"] },
  { name: "Beauty & Health", subcategories: ["Salon", "Spa", "Wellness"] },
  { name: "Business Services", subcategories: ["Consulting", "Marketing", "Legal Services"] },
  { name: "Dealers & Distributors", subcategories: ["Wholesale", "Retail", "Supply Chain"] },
  { name: "Education", subcategories: ["Online Courses", "Tutoring", "Certifications"] },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState({});

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCategory = (category) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div>
      {/* Menu Button */}
      <button className="menu-btn" onClick={toggleSidebar}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Sidebar Overlay */}
      <div className={`sidebar-overlay ${isOpen ? "show" : ""}`} onClick={toggleSidebar}></div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Sidebar Header */}
        {/* <div className="sidebar-header">
          <button className="close-btn" onClick={toggleSidebar}>
            <X size={30} />
          </button>
        </div> */}

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>
            <Search size={24} />
          </button>
        </div>

        {/* Franchise Insights */}
        <nav className="sidebar-section">
          <p>Franchise Insights</p>
          <ul>
            <li>News</li>
            <li>Video</li>
            <li>Magazine</li>
            <li>Top 100 Franchise</li>
            <li>Top Franchise Leaders</li>
            <li>Most Searched Franchise Brands</li>
          </ul>
        </nav>

        {/* Franchise Categories */}
        <nav className="sidebar-section">
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
        </nav>

        {/* Footer with Social Icons */}
        <div className="sidebar-footer">
          <button><Facebook size={24} /></button>
          <button><Twitter size={24} /></button>
          <button><Instagram size={24} /></button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

