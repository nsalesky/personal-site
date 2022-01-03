import React from "react";
import "./NavBar.css";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
  return (
    <nav id="nav-container">
      <ul id="nav-links">
        <li className="nav-item">
          <HashLink smooth to="#" className="nav-link">
            Home
          </HashLink>
        </li>
        <li className="nav-item">
          <HashLink smooth to="#" className="nav-link">
            About
          </HashLink>
        </li>
        <li className="nav-item">
          <HashLink smooth to="#" className="nav-link">
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};
