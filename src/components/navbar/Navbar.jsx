import React  from "react";
import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        Agrosync
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/info">Information</NavLink>
        </li>
        <li>
          <NavLink to="/classify">Classify</NavLink>
        </li>
        <li>
          <NavLink to="/weather">Weather</NavLink>
        </li>
        <li>
          <NavLink to="market-analysis">Market Analysis</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};
