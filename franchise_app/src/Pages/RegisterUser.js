import React, { useRef } from "react";
import logo1 from "../Assets/Images/Mrlogo.jpg";
import "../Assets/Style/RegisterUser.css";

function RegisterUser() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    // Ensure terms checkbox is converted to boolean
    data.terms = formData.get("terms") === "on";

    // Validate fields
    const isValid = Object.values(data).every((value) => value && value.trim() !== "");

    if (!isValid) {
      alert("Please fill in all the fields.");
      return;
    }

    console.log("Form Data Submitted:", data);
    alert("Form submitted!");
  };

  return (
    <div className="Reg-form">
      <div className="left-section">
        <img src={logo1} alt="Mr. Franchise" />
        <h3>WELCOME TO MR FRANCHISE</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="right-section">
        <h2>Investor Register</h2>

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="row">
           
          <input class="input" name="text" placeholder="First Name" type="firstname" required/>
          <input class="input" name="text" placeholder="Last Name" type="lastname" required/>
          
          </div>
          <div className="row">
          <input class="input" name="text" placeholder="Email Id" type="email" required/>
          <input class="input" name="text" placeholder="Address" type="address" required/>
            </div>
         
          <div className="row">
          <select className="right-drop" name="city">
            <option value="">Select City</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select className="right-drop" name="state">
            <option value="">Select State</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input class="input" name="text" placeholder="Zip code" type="zipcode" required/>
          </div>
          
          <div className="row">
          <select className="right-drop" name="investmentRange">
            <option value="">Select Investment Range</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select></div>
          <div className="row">
          <select className="right-drop" name="availableCapital">
            <option value="">Select Available Capital</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select></div>
          <div className="row">
          <select className="right-drop" name="investmentTimeframe">
            <option value="">Select Time Frame</option>
            <option value="Immediate">Immediate</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
          </select></div>
          <div className="row">
          <select className="right-drop" name="educationQualification">
            <option value="">Select Education Qualification</option>
            <option value="High School">High School</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
          </select></div>
          <div className="row">
          <select className="right-drop" name="occupation">
            <option value="">Select Occupation</option>
            <option value="Business Owner">Business Owner</option>
            <option value="Employee">Employee</option>
            <option value="Self-employed">Self-employed</option>
          </select></div>

         
<div class="custom-checkbox-container">
  <input class="custom-checkbox-input" id="modernCheckbox" type="checkbox" />
  <label class="custom-checkbox-label" for="modernCheckbox">
    <span class="custom-checkbox-text">Accept Terms and conditions</span>
  </label>
</div>


<button class="CartBtn">
  <span class="IconContainer">
    <svg viewBox="0 0 13 13" width="18px">
      <path
        fill="white"
        d="M1.55989957,5.41666667 L5.51582215,5.41666667 L4.47015462,0.108333333 L4.47015462,0.108333333 C4.47015462,0.0634601974 4.49708054,0.0249592654 4.5354546,0.00851337035 L4.57707145,0 L5.36229752,0 C5.43359776,0 5.50087375,0.028779451 5.55026392,0.0782711996 L5.59317877,0.134368264 L7.13659662,2.81558333 L8.29565964,2.81666667 C8.53185377,2.81666667 8.72332694,3.01067661 8.72332694,3.25 C8.72332694,3.48932339 8.53185377,3.68333333 8.29565964,3.68333333 L7.63589819,3.68225 L8.63450135,5.41666667 L11.9308317,5.41666667 C12.5213171,5.41666667 13,5.90169152 13,6.5 C13,7.09830848 12.5213171,7.58333333 11.9308317,7.58333333 L8.63450135,7.58333333 L7.63589819,9.31666667 L8.29565964,9.31666667 C8.53185377,9.31666667 8.72332694,9.51067661 8.72332694,9.75 C8.72332694,9.98932339 8.53185377,10.1833333 8.29565964,10.1833333 L7.13659662,10.1833333 L5.59317877,12.8656317 C5.55725264,12.9280353 5.49882018,12.9724157 5.43174295,12.9907056 L5.36229752,13 L4.57707145,13 L4.55610333,12.9978962 C4.51267695,12.9890959 4.48069792,12.9547924 4.47230803,12.9134397 L4.47223088,12.8704208 L5.51582215,7.58333333 L1.55989957,7.58333333 L0.891288881,8.55114605 C0.853775374,8.60544678 0.798421006,8.64327676 0.73629202,8.65879796 L0.672314689,8.66666667 L0.106844414,8.66666667 L0.0715243949,8.66058466 L0.0715243949,8.66058466 C0.0297243066,8.6457608 0.00275502199,8.60729104 0,8.5651586 L0.00593007386,8.52254537 L0.580855011,6.85813984 C0.64492547,6.67265611 0.6577034,6.47392717 0.619193545,6.28316421 L0.580694768,6.14191703 L0.00601851064,4.48064746 C0.00203480725,4.4691314 0,4.45701613 0,4.44481314 C0,4.39994001 0.0269259152,4.36143908 0.0652999725,4.34499318 L0.106916826,4.33647981 L0.672546853,4.33647981 C0.737865848,4.33647981 0.80011301,4.36066329 0.848265401,4.40322477 L0.89131128,4.45169723 L1.55989957,5.41666667 Z"
      ></path>
    </svg>
  </span>
  <p class="text">Register</p>
</button>

        </form>
      </div>
    </div>
  );
}

export default RegisterUser;
