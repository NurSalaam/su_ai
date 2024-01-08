// src/features/Root/components/Footer/footer.tsx

import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { pages } from "../../../../router/routes";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import pattern from "../../../../assets/images/pattern.png";
import su_logo from "../../../../assets/images/su_logo.png";

const Footer: FC = () => {
  return (
    <footer
      id="footer"
      style={{ backgroundImage: `url(${pattern})`, backgroundRepeat: "repeat" }}
    >
      <div id="footer-items">
        <img
          className="footer-logo"
          src={su_logo}
          alt="Stellenbosch University Logo"
        />
        <div id="social-and-copy-container">
          <div id="social-icons">
            <a
              href="https://www.instagram.com/ai_society_su/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com/people/AI-Society/61554254096764/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlinedIcon className="social-icon" />
            </a>
            <a
              href="https://twitter.com/SU_AI_Society"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="social-icon" />
            </a>
          </div>
          <div id="copyright">
            &copy; {new Date().getFullYear()} SU AI Society
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterItem: FC<{ label: string; href: string }> = ({ label, href }) => {
  return (
    <NavLink className="footer-item" to={href}>
      {label}
    </NavLink>
  );
};

export default Footer;
