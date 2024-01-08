// src/features/Root/components/Footer/footer.tsx

import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { pages } from "../../../../router/routes";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer: FC = () => {
  return (
    <footer id="footer">
      <div id="footer-items">
        <div id="footer-actions">
          <FooterItem label="Home" href={pages.root.path} />
          <FooterItem label="Activities" href={pages.activities.path} />
          <FooterItem label="About" href={pages.about.path} />
          <FooterItem label="Contact" href={pages.contact.path} />
          <FooterItem label="Newsletter" href={pages.newsletter.path} />
        </div>
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
