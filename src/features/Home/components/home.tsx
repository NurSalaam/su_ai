import React, { FC } from "react";
import "./home.css";
import Content from "../../../components/content";
import pattern from "../../../assets/images/pattern.png";
import { Link } from "react-router-dom";
import { pages } from "../../../router/routes";

const Home: FC = () => {
  return (
    <div id="home">
      <section id="hero">
        <Content>
          <h1 id="hero-text">
            Welcome to the Stellenbosch University AI Society
          </h1>
        </Content>
      </section>
      <section id="description">
        <Content>
          <h2>We're living through exciting times. Let's explore together.</h2>
          <p>
            The Stellenbosch University AI Society is a student-run society open
            to all Stellenbosch Univeristy Students. We're dedicated to
            exploring the field of Artificial Intelligence. We believe that AI
            is one of the most exciting fields of our time, and we want to share
            that excitement with you.
          </p>
          <Link to={pages.about.path}>{"Learn more >"}</Link>
        </Content>
      </section>
      <div
        style={{
          height: "50px",
          width: "100%",
          backgroundImage: `url(${pattern})`,
          backgroundRepeat: "repeat",
        }}
      ></div>
      <section id="activities">
        <Content>
          <h2>What we do</h2>
          <div id="card-holder">
            <Card title="Events">
              AI is set to revolutionize all fields, from healthcare to finance,
              from engineering to arts. No matter what you're studying or what
              field you're interested in working in, our society is here to help
              you navigate the interdisciplinary nature of AI. Join us as we
              explore the endless possibilities together.
              <br></br>
            </Card>
            <Card title="Projects">
              As a member of our society, you'll have the opportunity to work on
              exciting projects that will allow you to explore the field of AI
              in a practical way. We're super excited to see what we'll build
              together!
              <br></br>
            </Card>
          </div>{" "}
          <Link to={pages.activities.path}>
            {"Check out our upcoming events and projects here >"}
          </Link>
        </Content>
      </section>
      <section id="newsletter">
        <Content>
          <h2>Newsletter</h2>
          <p>
            If you're interested in AI, you should definitely subscribe to our
            biweekly newsletter. We'll send you the latest news in AI, as well
            as information about our upcoming events and projects.
          </p>
          <Link to={pages.newsletter.path}>{"Subscribe >"}</Link>
        </Content>
      </section>
    </div>
  );
};

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Home;
