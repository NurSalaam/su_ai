import React, { FC, useState } from "react";
import Content from "../../../components/content";
import "./activities.css";
import Divider from "../../../components/divider";

const mockEvents: Activity[] | null = [
  {
    title: "Societies Fair",
    date: new Date(2024, 2, 2).toLocaleDateString(),
    time: "14:00-18:00",
    location: "Coetzenburg",
    description:
      "Come meet the committee and learn more about what we do. We're excited to meet you!",
  },
  {
    title: "Opening Event",
    date: new Date(2024, 2, 27).toLocaleDateString(),
    time: "17:00-19:00",
    location: "TBC",
    description:
      "Join us for our opening event, where we'll be learning from representatives from industry and academia about the exciting developments in the field of AI.",
  },
];

const mockProjects: Activity[] | null = [];
const enum Tab {
  Events,
  Projects,
}
const Activities: FC = () => {
  const [tab, setTab] = useState(Tab.Events);

  return (
    <div id="activities">
      <section id="hero">
        <Content>
          <h1 id="hero-text">Activities</h1>
          <h2>Join us at our events, or work on one of our projects.</h2>
        </Content>
      </section>
      {/* <Divider height="10px" /> */}
      <Content>
        <div id="tab-selector">
          <div className="tab" onClick={() => setTab(Tab.Events)}>
            <h3>Events</h3>
            {tab === Tab.Events && <Divider height="5px" />}
          </div>
          <div className="tab" onClick={() => setTab(Tab.Projects)}>
            <h3>Projects</h3>
            {tab === Tab.Projects && <Divider height="5px" />}
          </div>
        </div>
        <div id="tab-content">
          {tab === Tab.Events &&
            (mockEvents && mockEvents.length > 0 ? (
              mockEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))
            ) : (
              <p>No upcoming events at the moment, check back again soon!</p>
            ))}
          {tab === Tab.Projects &&
            (mockProjects && mockProjects.length > 0 ? (
              mockProjects.map((event, index) => (
                <EventCard key={index} event={event} />
              ))
            ) : (
              <p>No upcoming projects at the moment, check back again soon!</p>
            ))}
        </div>
      </Content>
    </div>
  );
};

interface Activity {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

interface ActivityCardProps {
  event: Activity;
}

const EventCard: FC<ActivityCardProps> = ({ event }) => {
  return (
    <div className="event-card">
      <h2 className="event-title">{event.title}</h2>
      <p className="event-date">{event.date}</p>
      <p className="event-time">{event.time}</p>
      <p className="event-location">{event.location}</p>
      <p className="event-description">{event.description}</p>
    </div>
  );
};
export default Activities;
