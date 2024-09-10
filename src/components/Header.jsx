import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("");
  };

  return (
    <header className="Header">
      <h1>Book Management App</h1>
      <NavLinks />
    </header>
  );
};

export default Header;
