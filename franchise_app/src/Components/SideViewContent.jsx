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
          
        ],
      },
      {
        name: "it services",
        label: "IT Services",
        items: [
          "Cartridge Refilling",
          "Computer And ICT Services",
          "Management Software",
          "Printing Services",
          "Security Services",
          "Telecom",
        ],
      },

      {
        name: "logistics",
        label: "Logistics",
        items: [
          "Courier & Delivery",
          "Logistics Outsourcing",
          "Logistics Technology Provider",
          "Home Appliances Repair Services",
          "Material Handling & Order Processing",
          "Supply Chain Management",
          "Transportation",
          "Trucking Logistics Services",
          "Warehousing Services",
         ],
      },
      {
        name: "realestate",
        label: "Real Estate",
        items: [
          "Real Estate Sub",
        ],
      },
      {
        name: "travel",
        label: "Travel",
        items: [
          "Car Rental & Cab Services",
          "Onlinr Travel Services",
          "Others Travel",
          "Tour Packages",
          "Travel Agents",
        ],
      },
      {
        name: "wastemanagement",
        label: "Waste Management & Recycling Services",
        items: [
          "Electronic Waste Management Services",
          "Pollution Monitoring",
          "Scrap Dealers & Management Services",
          "Solid Waste Management",
          "Waste Disposal Services",
          "Waste Management Services",
          "Water Treatment & Purification Services",
        ],
      },

   

      
  ],
},


{
  name: "Dealers",
  label: "Dealers & Distributors",
  subCategories: [
{
      name: "agriculture",
      label: "Agriculture",
      items: [
        "Poultry Feed Supplements",
        "Agro Products & Commodities",
        "Rural Products",
        "Fodder & Feed Additives",
        "Frozen & Dried Fruit",
        "Plant Extract",
        "Plant, Flower & Dried Flowers",
        "Farming Tools, equipments & Machines",
        "Fishery",
        "Fishery Products",
        "Greenhouse Supplies & Equipments",
        "Seeds & Plant Saplings",
        "Tractor, Tractor Parts & Assemblies",
      ],
    },
    {
      name: "automobile",
      label: "Automobile",
      items: [
        "Automobile Accessories",
        "Automobile Maintenance",
        "Automotive Electrical Parts",
        "Automotive Parts And Components",
        "Commercial Vehicles & Parts",
        "Electric Vehicles",
        "Engine, Engine Components, Spare Parts",
        "GPS Navigation & Tracking System",
        "Oil & Lubricants",
        "Tyre, Tube, Accessories",
        "Automobile Resellers",
        "Four Wheeler & Parts",
        "Garage & Service Station Equipment",
        "Parking System",
        "Three Wheeler & Parts",
        "Two Wheeler & Parts",
        "Used Auto Parts",
      ],
    },
    {
      name: "buildingconstruction",
      label: "Building & Construction",
      items: [
        "Bathroom & Toilet Accessories & Fittings",
        "Bricks & Cement & Sand Supplies",
        "Builder & Construction Hardware",
        "Building Architecture",
        "Building Decoration Products",
        "Doors/Wooden Door Panels",
        "Furnishing & Wood Works",
        "Paints & Allied Products",
        "Tiles",
        "Building Coating",
        "Fireproof/Flameproof Materials",
        "Construction Equipments",
        "Building panel & Cladding Materials",
        "Ceramic, Glass & Verified Tiles",
        "FRP Lining, PU & Powder Coating",
        "Gazebos, Awnings, Canopies & Sheds",
        "Landscape Structure & Designing",
        "Marble, Granite & Stones",
        "Metals & Minerals",
        "Prefabricated Houses & Structures",
        "PVC, CPVC, HDPE Water Pipe Fittings",
        "PVC, LDPE, HDPE & Plastic Sheets",
        "Scaffolding Pipes & Fittings",
        "Surface Coating & Paint Equipment",
        "Waterproof Materials",
        "Wood, Plywood, Timber & laminates",
      ],
    },
    {
      name: "hardware",
      label: "Computer Hardware, Mobile&Accessories",
      items: [
        "Computer Cable & Connectors",
        "Computer Parts & Accessories",
        "Mobile Accessories",
        "Software",
        "Printer Parts & Accessories",
        "Server & Work Station",
        "Drives & Storage Devices",
        "CAD CAM Design & Consultancy",
        "Computer & Mobile Softwares & Apps",
        "Computer IT & Software Training",
        "Office Automation Products & Devices",
        "Routers, Cables & Networking Devices",
        "Web development & Marketing Services",
      ],
    },
    {
      name: "education",
      label: "Education",
      items: [
        "Educational Material",
        "School Supplies",
        "Smart Classes Material",
        "Software",
        "Digital Education & Smart Class Material",
        "Educational, Religious & Cultural Books",
        "Projectors, Presentation Board & Accessories",
      ],
    },
    {
      name: "electronics",
      label: "Electronics & Electronics",
      items: [
        "Chargers",
        "Consumer Electronics",
        "Electronic Intruments",
        "Electronic Products & Components",
        "Energy Saving Devices",
        "Inverters, UPS & Battery Chargers",
        "LED Lights",
        "Lighting Products & Components",
        "Wires, Cables & Accessories & Conductors",
        "Electronic Signs",
        "Electric Power Tools",
        "3D Technology",
        "Batteries, Chargers & Storage Devices",
        "Domestic RO water Purifiers & Filters",
        "Electronic Security & Safety Systems",
        "Generator Parts & Accessories",
        "Heater, Thermostat & Heating Devices",
        "Home Automation Systems",
        "Lantern, Chandeliers & Hanging Lamps",
        "Measurig Equipments & Instruments",
        "Solar & Renewable Energy Products & Components",
        "Transformer & Transformer Components",
        "Vaoltage Stabilizers",
      ],
    },
    {
      name: "environment",
      label: "Environment & Pollution",
      items: [
        "Solar Products",
        "Air Cleaning Equipments",
        "Air Curtains",
        "Air Distribution Products",
        "Eco Friendly Products",
        "Pollution Control & Monitoring Equipments",
        "Solar Lights",
        "Waste Management Plants",
      ],
    },
    {
      name: "fashion",
      label: "Fashion & Apparel",
      items: [
        "Baby & Kids Wear",
        "Denim-Garments, Fabrics & Bags",
        "Ethnic Wear",
        "Fabric & Accessories",
        "Fashion Accessories",
        "Footwear",
        "Jewellery",
        "Mens Wear",
        "Undergarments, Lingerie, Nightwear",
        "Women Wear",
        "Socks & Stockings",
        "Shoes Material & Accessories",
        "Denim - Garments, Fabrics, Bags",
        "Athletic Wear",
        "Animal Clothing & Accessories",
        "Dummies & Mannequins",
        "Military & Defence Supplies",
        "Party, Wedding, Western & Formal Wear",
        "Scarves, Shawls, Stoles & Bandanas",
        "Towels, Napkins & Handkerchiefs",
        "Uniforms & Workwear",
        "Wallets, Handbags & Backpacks",
        "Winter Wear",
        "Yarns & Threads",
      ],
    },
    {
      name: "food",
      label: "Food & Beverage",
      items: [
        "Beverages",
        "Confectionery & Bakery Products",
        "Cooking Oil",
        "Dairy Products",
        "Drinking Water",
        "Energy Drinks",
        "Packaged Food Products",
        "Snacks",
        "Spices",
        "Tea & Coffee Products",
        "Meat & Poultry",
        "Frozen & Dried Fruit",
        "Pickles & Murabba",
        "Mouth Freshers",
        "Saffrons",
        "Chocolates, Biscuits & Cookies",
        "Edible Oil & Allied Products",
        "Flour",
        "Milk & Dairy Products",
        "Namkeen & Snacks",
        "Organic Food",
        "Ready to Eat & Instant Food Mixes",
        "Rice, Cereals, Food Grains & Pulses",
        "Sugar & Sweeteners",
        "Sweets & Deserts",
      ],
    },

    {
      name: "healthbeauty",
      label: "Health & Beauty",
      items: [
        "Bath Products",
        "Cosmetics",
        "Hair Care Products",
        "Healthcare & Medical Products",
        "Herbal, Ayurvedic, Homeopathic & Natural Care Products",
        "Perfumes & Fragrances",
        "Personal Care Products",
        "Sanitation Products",
        "Skincare Products",
        "Anti Infective Drugs & Medicines",
        "Veterinary Medicines",
        "Weight Loss/Gain Products",
        "Contraceptives & Condoms",
        "Essential & Aromatic Oils",
        "Salon, Spa Kits & equipments",
        "Soap, Detergent Powder & Cakes",
      ],
    },

    {
      name: "healthcare",
      label: "Health-care, Medical, Pharma & Drugs",
      items: [
        "Herbal, Ayurvedic, Homeopathic & Natural Care Products",
        "Skincare Products",
        "Healthcare & Medical Products",
      ],
    },
    {
      name: "homesupplies",
      label: "Home Supplies",
      items: [
        "Bags & Luggage",
        "Bed Linen Bed Sheet, Pillow Cover, Quilts",
        "Cutlery, Crockery & Tableware",
        "Electric Fittings & Accessories",
        "Handicraft Products",
        "Home Cleaning Products",
        "Home Furnishing",
        "Home Furniture",
        "Household & Consumer Products",
        "Kitchen Appliances / Cookware",
        "Religious Products",
        "LPG Distributors",
        "Lamps, Bulbs & Lighting",
        "Pipes And Pipe Fittings",
        "Home Decoration Items",
        "Laundry Products",
        "Disposables",
        "Aqua Culture, Aquarium & Supplies",
        "Domestic Water and Air Purifiers & Filters",
        "Gifts, Crafts, Handicrafts & Artifacts",
        "Mirrors & Glasswares",
        "Mosquito & Insect Repellent",
        "Musical equipments & Accessories",
      ],
    },

    {
      name: "industrialmachinery",
      label: "Industrial Machinery",
      items: [
        "Agriculture Machine & Tools",
        "Cranes & Forklifts",
        "Farming Tools & Equipments",
        "Food Processing Plant & Machinery",
        "Pollution Control Machinery",
        "Printing Machinery & Equipments",
        "Water Treatment & Purifying Plant",
        "Welding Equipment & Machinery",
        "Drilling & Boring Machinery",
        "Industrial Furnaces & Ovens",
        "Pharmaceutical Machinery",
        "Hydraulic & Pneumatic Machinery",
        "CNC & Special Purpose Machinery",
        "Elevators & Escalators",
        "Vending & Dipensary Machines",
        "Construction Machinery",
        "Paper Converting Machines",
        "Earth Moving Equipment & Machinery",
        "Woodworking Machinery",
      ],
    },
    {
      name: "industrialsupplies",
      label: "Industrial Supplies",
      items: [
        "Energy Management Systems",
        "Fibre Glass Products",
        "Hardware & Tools",
        "Packaging Material",
        "Printing Material",
        "Solar Energy & Components",
        "Rubber & Rubber Products",
        "Bearing Parts & Components",
        "Acoustic Products",
        "Air Compressors",
        "Conveyor & Conveyor/Industrial Belts",
        "Material Handling Equipments",
        "Cooling Tower & Chilling Plants",
        "Filters-Air, Gas & Liquid",
        "Dies & Moulds",
        "Boilers, Components & Spares",
        "Industrial Blowers",
        "Weighing Scales",
        "Plastic Pet Products",
        "Drills, Grinders, Saws & Power Tools",
        "Dryers & Evaporators",
        "Freezers, Refrigerators & Chillers",
      ],
    },

    {
      name: "medical",
      label: "Medical & Hospital Supplies",
      items: [
        "Hospital Equipments",
        "Laboratory Equipments & Instruments",
        "Medical Equipments",
        "Surgical Dressings & Disposables",
        "Hospital Furniture",
        "Face Mask & Medical PPE Kits",
        "Medical & Surgical Clothing",
        "Orthopaedic & Surgical Instruments",
      ],
    },

    {
      name: "officesupplies",
      label: "Office Supplies",
      items: [
        "Electrical Equipments",
        "Office Equipmet & Supplies",
        "Office Furniture",
        "Office Stationery",
        "Inverter & UPS ower System",
        "Finger Scanning Machine",
        "Billing Machines",
        "Books",
        "Educational Aids",
        "Newspaper, Books & Magazines",
        "Photography & Film Making Equipments",
        "School Stationery",
        "Study material & Note Books",
      ],
    },

    {
      name: "securityprotection",
      label: "Security & Protection",
      items: [
        "Fire Fighting & Fire Protection Equipments",
        "Surveillance Equipments",
        "Anti Theft Products",
        "Roadway Safety",
        "Biometrics & Access Control Cards",
        "CCTV Camera, Surveillance Equipments & Parts",
        "Door Lock, Electronic Locks and Latches",
        "Intelligence & Spying Devices",
        "Life Safety Equipments",
        "Residential & Commercial security",
        "Safety Equipment & Systems",
        "Surveillance Equipments & Parts",
        "Vehicle Security System & Protection Device",
      ],
    },
    {
      name: "securityprotection",
      label: "Security & Protection",
      items: [
        "Fire Fighting & Fire Protection Equipments",
        "Surveillance Equipments",
        "Anti Theft Products",
        "Roadway Safety",
        "Biometrics & Access Control Cards",
        "CCTV Camera, Surveillance Equipments & Parts",
        "Door Lock, Electronic Locks and Latches",
        "Intelligence & Spying Devices",
        "Life Safety Equipments",
        "Residential & Commercial security",
        "Safety Equipment & Systems",
        "Surveillance Equipments & Parts",
        "Vehicle Security System & Protection Device",
      ],
    },
    {
      name: "securityprotection",
      label: "Security & Protection",
      items: [
        "Fire Fighting & Fire Protection Equipments",
        "Surveillance Equipments",
        "Anti Theft Products",
        "Roadway Safety",
        "Biometrics & Access Control Cards",
        "CCTV Camera, Surveillance Equipments & Parts",
        "Door Lock, Electronic Locks and Latches",
        "Intelligence & Spying Devices",
        "Life Safety Equipments",
        "Residential & Commercial security",
        "Safety Equipment & Systems",
        "Surveillance Equipments & Parts",
        "Vehicle Security System & Protection Device",
      ],
    },

    {
      name: "sports",
      label: "Sports, Fitness & Entertainment",
      items: [
        "Adventure Sporting & Tracking Goods",
        "Awards, Trophies & Memetoes",
        "Fitness and Gym Equipments",
        "Playground Equipments",
        "Sports Bags, Duffel Bags & Kit Bags",
        "Sports Goods & Equipments",
        "Sports Safety Products & Equipments",
        "Sports Wear & Athletic Accessories",
        "Swimming Pool and water Sports Goods & Accessories",
        
      ],
    },

    {
      name: "business",
      label: "Business Services",
      items: [
        "Architecture & Interiors",
        "Banking & ATMs",
        "Business & Audit Services",
        "Call Center & BPO Services",
        "Contractors & Freelancers",
        "Digital Marketing Services",
        "Sports Safety Products & Equipments",
        "Event Planner & Organizer",
        "Export Import",
      ],
    },


  ],
},
{
  name: "education",
  label: "Education",
  subCategories: [
{
      name: "coaching",
      label: "Coaching & Tutoring",
      items: [
        "CAD/CAM/CAE & Multimedia",
        "Competitive Exam Coaching Institute",
        "Online Coaching",
        "Robotics & Technical Training/ AI",
        "School Tutoring",
      ],
    },
    {
      name: "earlyeduction",
      label: "Early Education",
      items: [
        "Activity Centres, Day Care & Creches",
        "After School Activities",
        "Preschools",
       ],
    },
    {
      name: "educationconsultants",
      label: "Education Consultants",
      items: [
        "Career Counselling & Brain Programming",
        
       ],
    },
    {
      name: "educationservices",
      label: "Education Services",
      items: [
        "Education Supplies",
        "Mobile Application Services"
       ],
    },
    {
      name: "highereducation",
      label: "Higher Education",
      items: [
        "Degree/Diploma Colleges",
        "Distance Learning Centres",
        "Professional Education Colleges",
        "Universities (including Overseas Franchises)",
       ],
    },
    {
      name: "k-12 education",
      label: "K-12 Education",
      items: [
        "Extra Curriculum Activities",
        "Schools",
       ],
    },
    {
      name: "onlineeducation",
      label: "Online Education",
      items: [
        "Certification Course Coaching",
        "Corporate Training",
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
        <h3>Franchise Categories</h3>
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
                     <li key={index}>{item}<a/></li>
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