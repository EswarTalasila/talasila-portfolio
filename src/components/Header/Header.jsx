import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Navigation Bar */}
      <div>
        <nav className="navbar flex justify-center top-2">
          <ul className="nav-links">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={300}
                activeClass="active-link"
                className="nav-link cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={300}
                activeClass="active-link"
                className="nav-link cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={300}
                activeClass="active-link"
                className="nav-link cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={300}
                activeClass="active-link"
                className="nav-link cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
