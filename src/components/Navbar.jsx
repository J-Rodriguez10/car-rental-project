import { useState } from "react";
import { motion } from "framer-motion";
import { IconBrandGithub } from "@tabler/icons-react"
import { NavLink, Link, useNavigate } from "react-router-dom";

import logo from "../images/logo/autostar-logo.png";
import { IconMenu2, IconX } from "@tabler/icons-react";

// React router automatically passes in isActive prop
function checkIsActive({ isActive }) {
  return isActive ? "active-link" : "";
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

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
        <a href="https://github.com/J-Rodriguez10/car-rental-project" target="_blank" rel="noopener noreferrer" className="logo-link">
          <img src={logo} alt="autostar-logo" />
          <IconBrandGithub size={22} className="github-icon" color="white" />
        </a>

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
            <a onClick={() => navigate("/#about-us")}>About Us</a>
          </li>
          <li>
            <a onClick={() => navigate("/#testimonials")}>Testimonials</a>
          </li>
          <li>
            <NavLink className={checkIsActive} to="/news">
              News
            </NavLink>
          </li>
          <li>
            <a onClick={() => navigate("/#contact")}>Contact</a>
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
                <a onClick={() => navigate("/#about-us")}>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/#testimonials")}>
                  <span>Testimonials</span>
                </a>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <a onClick={() => navigate("/#contact")}>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </motion.aside>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
