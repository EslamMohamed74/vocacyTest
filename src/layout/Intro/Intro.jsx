import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Intro.scss";
import MainCard from "../../components/ui/MainCard/MainCard";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import VRGlasses from "../../assets/images/Intro/VRGlasses.webp";
import VRSimulation1 from "../../assets/images/Intro/VRSimulation1.webp";
import Gamified from "../../assets/images/Intro/Gamified.webp";
import HybridLearning from "../../assets/images/Intro/HybridLearning.webp";
import Mentor from "../../assets/images/Intro/Mentor.webp";

const Intro = () => {
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
    <Container className="intro">
      <Row>
        <Col className="mainSection">
          <img src={VRGlasses} alt="" />
          <div className="textSection">
            <h1>
              The Next Generation
              <br />
              of Talent Development
            </h1>
            <p>
              We help our partners to improve the learner performance,
              productivity, and make better utilization of the available
              resources at the workplace through accelerated, measurable, and
              sustainable 360 technology-driven learning solutions that are
              engaging, experiential, and learner-centric.
            </p>
            <PrimaryButton text="Request A Demo" />
          </div>
        </Col>
      </Row>
      <div className="secondSection">
        <Row className="px-2 px-md-4">
          {cards.map((card, index) => {
            return (
              <Col
                className="mb-4 mb-md-2 mb-0"
                xs={12}
                md={6}
                lg={3}
                key={index}
              >
                <MainCard
                  link={card.link}
                  img={card.img}
                  title={card.title}
                  body={card.body}
                  buttonText={card.buttonText}
                />
              </Col>
            );
          })}
        </Row>
        <div className="blueBackGround"></div>
      </div>
      <hr className="speaceBtwSections" />
    </Container>
  );
};

export default Intro;
