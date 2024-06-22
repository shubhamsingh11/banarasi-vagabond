import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="site-header">
      <Link to="/">The Banarasi Vagabond</Link>
      <nav id="header-nav">
        <ul>
          <li>
            <Link to="/upload">Create a blog </Link>
          </li>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
