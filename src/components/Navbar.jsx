import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";

import logo from "../images/logo/autostar-logo.png";
import { IconMenu2, IconX } from "@tabler/icons-react";

// React router automatically passes in isActive prop
function checkIsActive({ isActive }) {
  return isActive ? "active-link" : "";
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function openMobileMenu() {
    setIsOpen(true);
  }
  function hideMobileMenu() {
    setIsOpen(false);
  }

  // Framer motion animations:
  const mobileMenuVariant = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: "0%",

      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  return (
    <nav>
      <div className="navbar">
        {/* logo */}
        <img src={logo} alt="autostar-logo" />

        {/* desktop */}
        <ul className="navbar__ul">
          <li>
            <NavLink className={checkIsActive} to="/">
              <span className="caret-down">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={checkIsActive} to="/auto-listings">
              Auto Listings
            </NavLink>
          </li>
          <li>
            <NavLink className={checkIsActive} to="/about-us">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className={checkIsActive} to="/testimonials">
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink className={checkIsActive} to="/news">
              News
            </NavLink>
          </li>
          <li>
            <NavLink className={checkIsActive} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile */}
        <div className="mobile-nav-cont">
          <div onClick={openMobileMenu} className="nav-toggle-btn">
            <IconMenu2 width={40} height={30} color="white" />
          </div>

          <motion.aside
            className="nav-menu"
            variants={mobileMenuVariant}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
          >
            <header>
              <IconX
                onClick={hideMobileMenu}
                width={28}
                height={28}
                className="x-btn"
              />
            </header>
            <ul>
              <li>
                <Link to="/">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/auto-listings">Auto Listings</Link>
              </li>
              <li>
                <Link to="/about-us">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/testimonials">
                  <span>Testimonials</span>
                </Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </motion.aside>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
