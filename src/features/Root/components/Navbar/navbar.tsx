// src/features/Root/components/Navbar/navbar.tsx

import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { pages } from "../../../../router/routes";
import "./navbar.css";
import logo from "../../../../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav id="navbar">
      <div id="nav-items">
        <div id="nav-menu">
          <img src={logo} alt="Logo" id="logo" />
          <MenuIcon id="menu" onClick={() => setOpen(!open)} />
        </div>
        <div id="nav-actions" className={open ? "open" : ""}>
          <NavItem label="Home" href={pages.root.path} setOpen={setOpen} />
          <NavItem
            label="Activities"
            href={pages.activities.path}
            setOpen={setOpen}
          />
          <NavItem label="About" href={pages.about.path} setOpen={setOpen} />
          <NavItem
            label="Contact"
            href={pages.contact.path}
            setOpen={setOpen}
          />
          <NavItem
            label="Newsletter"
            href={pages.newsletter.path}
            setOpen={setOpen}
          />
        </div>
      </div>
    </nav>
  );
};

const NavItem: FC<{
  label: string;
  href: string;
  setOpen: (open: boolean) => void;
}> = ({ label, href, setOpen }) => {
  return (
    <NavLink className="nav-item" to={href} onClick={() => setOpen(false)}>
      {label}
    </NavLink>
  );
};

export default Navbar;
