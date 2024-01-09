// TeamMember.tsx
import React, { FC } from "react";
import "./team-member.css";

interface TeamMemberProps {
  name: string;
  studies: string;
  role: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

const TeamMember: FC<TeamMemberProps> = ({
  name,
  role,
  studies,
  description,
  image,
  imagePosition,
}) => (
  <div className={`team-member ${imagePosition}`}>
    <img src={image} alt={name} className="team-member-image" />
    <div className="team-member-info">
      <h3>{name}</h3>
      <h4>{role}</h4>
      <h4>{studies}</h4>
      <p>{description}</p>
    </div>
  </div>
);

export default TeamMember;
