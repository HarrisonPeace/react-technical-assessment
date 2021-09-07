import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
      <Link to="/">Contact Us</Link>
    </header>
  );
};

export default Header;
