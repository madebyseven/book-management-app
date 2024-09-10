import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <div>
      <NavLink to="/" className="link">
        Book List
      </NavLink>
      <NavLink to="/addbook" className="link">
        Add Book
      </NavLink>
    </div>
  );
};

export default NavLinks;
