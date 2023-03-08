import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="main-header">
      <h1>Jake Parke</h1>
      <nav className="headerNav">
        <h2>
          <Link to="/reactPortfolio">About Me</Link>
        </h2>
        <h2>
          <Link to="/reactPortfolio/work">My work</Link>
        </h2>
        <h2>
          <Link to="/reactPortfolio/contact">Contact</Link>
        </h2>
      </nav>
    </header>
  );
}

export default Header;
