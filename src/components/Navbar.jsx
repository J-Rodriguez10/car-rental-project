import { Link, NavLink } from "react-router-dom";

import logo from "../images/logo/autostar-logo.png";

function Navbar() {
  return (
    <nav>
      {/* desktop */}
      <div className="navbar">
        <img src={logo} alt="autostar-logo" />
        
        <ul className="navbar__ul">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/"
            >
              <span className="caret-down">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/auto-listings"
            >
              Auto Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/about-us"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/testimonials"
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/news"
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
