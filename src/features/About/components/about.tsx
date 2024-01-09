// About.tsx
import React, { FC } from "react";
import "../../Home/components/home.css";
import Content from "../../../components/content";
import Hero from "../../../components/Hero";
import TeamMember from "./TeamMember/team-member";
import teamMembers from "../../../assets/data/team-members";
import Divider from "../../../components/divider";

const About: FC = () => {
  const teamMemberElements = teamMembers.map((member) => (
    <TeamMember
      name={member.name}
      role={member.role}
      studies={member.studies}
      description={member.description}
      image={member.image}
      imagePosition="left"
    />
  ));
  return (
    <div id="home-page">
      <Hero title="About Us" />
      <section id="description">
        <Content>
          <h2>Perfect Place. Perfect Time.</h2>
          <p>
            We are the Stellenbosch University AI Society, a newly established,
            student-run society open to all students at Stellenbosch University.
            Our passion lies in the potential of AI and the exciting future it
            holds. Our goal is to provide value to our members by offering a
            multidisciplinary approach to AI, recognizing that its impact
            extends beyond technical professions. We believe in innovation
            through diversity and see Stellenbosch University as the perfect hub
            of talent and skill for our society.
          </p>
        </Content>
      </section>
      <Content>
        <Divider height="10px" />
      </Content>
      <section id="activities">
        <Content>
          <h2>Meet the Team</h2>
          <div id="team-members">{teamMemberElements}</div>
        </Content>
      </section>
    </div>
  );
};

export default About;
