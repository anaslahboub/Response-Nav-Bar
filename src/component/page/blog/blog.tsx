import React, { useState } from 'react';
import './blog.scss';

function Blog() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className={`dropdown ${dropdownOpen ? 'show' : ''}`} >
        <div className="dropdown-toggle" onClick={toggleDropdown}>
          <span>Kilométrage annuel</span>
          <i className="bx bx-chevron-down"></i>
        </div>

        <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="dropdownMenu2">
          <li className="option">5000   km</li> 
          <li className="option">10.000 km</li>
          <li className="option">15.000 km</li>
          <li className="option">20.000 km</li>
          <li className="option">25.000 km</li>
          <li className="option">30.000 km</li>
        </ul>
      </div>

      {/* <div>
        <div className="dropdown2">
          <select name="Kilométrage annuel" id="Kilométrage-annuel">
            <option value=""  disabled  hidden>Kilométrage annuel</option>
            <option value="5000">5000 km</option>
            <option value="10000">10.000 km</option>
            <option value="15000">15.000 km</option>
            <option value="20000">20.000 km</option>
            <option value="25000">25.000 km</option>
            <option value="30000">30.000 km</option>
            <option value="35000">35.000 km</option>
            <option value="40000">40.000 km</option>
          </select>
        </div>
      </div> */}
    </div>
  );
}

export default Blog;
