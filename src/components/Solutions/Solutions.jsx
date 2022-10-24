import React from "react";
import {  Row, Col } from "react-bootstrap";
import "./Solutions.scss";
import MainCard from "../ui/MainCard/MainCard";
import VRSimulation1 from "../../assets/images/Intro/VRSimulation1.webp";
import Gamified from "../../assets/images/Intro/Gamified.webp";
import HybridLearning from "../../assets/images/Intro/HybridLearning.webp";
import Mentor from "../../assets/images/Intro/Mentor.webp";

function Solutions() {
  const cards = [
    {
      link: "#",
      img: VRSimulation1,
      title: "Immersive VR/AI Simulation",
      body: "Learners can role-play in a safe environment with an AI-Powered virtual human.",
      buttonText: "Learn More",
    },
    {
      link: "#",
      img: Gamified,
      title: "Game-Based Simulations (GBS)",
      body: "With GBL, all your learning activities through gamification will be fun and engaging.",
      buttonText: "Learn More",
    },
    {
      link: "#",
      img: HybridLearning,
      title: "Coaching & Mentoring",
      body: "Accelerating The Shift from High Potential to High Performance.",
      buttonText: "Learn More",
    },
    {
      link: "#",
      img: Mentor,
      title: "Assessments",
      body: "A laser-focused method for quickly achieving deeper insights otherwise needs a long time to uncover.",
      buttonText: "Learn More",
    },
  ];
  return (
    <Row className="Solutions">
      {cards.map((card, index) => {
        return (
          <Col xs={12} key={index}>
            <MainCard
              link={card.link}
              img={card.img}
              title={card.title}
              body={card.body}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default Solutions;
