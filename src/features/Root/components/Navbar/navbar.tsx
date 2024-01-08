// src/features/Root/components/Navbar/navbar.tsx

import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { pages } from "../../../../router/routes";
import "./navbar.css";
import logo from "../../../../assets/images/logo.png";

const Navbar: FC = () => {
  return (
    <nav id="navbar">
      <div id="nav-items">
        <img src={logo} alt="Logo" id="logo" />
        <div id="nav-actions">
          <NavItem label="Home" href={pages.root.path} />
          <NavItem label="Activities" href={pages.activities.path} />
          <NavItem label="About" href={pages.about.path} />
          <NavItem label="Contact" href={pages.contact.path} />
          <NavItem label="Newsletter" href={pages.newsletter.path} />
        </div>
      </div>
    </nav>
  );
};

const NavItem: FC<{ label: string; href: string }> = ({ label, href }) => {
  return (
    <NavLink className="nav-item" to={href}>
      {label}
    </NavLink>
  );
};

export default Navbar;
