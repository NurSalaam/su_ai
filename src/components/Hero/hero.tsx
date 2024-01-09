// Header.tsx
import React from "react";
import Content from "../content";
import "./hero.css";

interface HeroProps {
  title: string;
  subheading?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subheading }) => (
  <section id="hero">
    <Content>
      <h1 id="hero-text">{title}</h1>
      {subheading && <h2>{subheading}</h2>}
    </Content>
  </section>
);

export default Hero;
