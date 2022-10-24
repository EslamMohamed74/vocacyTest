import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./LearningCenter.scss";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import MainCard from "../../components/ui/MainCard/MainCard";
import l1 from "../../assets/images/LearningCenter/l1.webp";
import l2 from "../../assets/images/LearningCenter/l2.webp";
import l3 from "../../assets/images/LearningCenter/l3.webp";

const LearningCenter = () => {
  const cards = [
    {
      link: "#",
      img: l1,
      title: "8 Great Design Trends That Are Coming Back",
      body: "Ac, pellentesque proin tincidunt lobortis sit velit velit dui eget. Massa, lectus orci auctor morbi. A nisl vitae.",
      labels: [
        { text: "DESIGN", backgroundColor: "#C7F7FF", color: "#1BC4DE" },
      ],
      date: "Norma Hicks - 18th June 2022",
    },
    {
      link: "#",
      img: l2,
      title: "5 Great Marketing Trends To Follow In 2021",
      body: "Ac, pellentesque proin tincidunt lobortis sit velit velit dui eget. Massa, lectus orci auctor morbi. A nisl vitae.",
      labels: [
        { text: "MARKETING", backgroundColor: "#FFF4C7", color: "#DEB11B" },
      ],
      date: "John Doe - 18th June 2022",
    },
    {
      link: "#",
      img: l3,
      title: "How to Design a Memorable Brand Identity",
      body: "Ac, pellentesque proin tincidunt lobortis sit velit velit dui eget. Massa, lectus orci auctor morbi. A nisl vitae.",
      labels: [
        { text: "VR / AR", backgroundColor: "#E5CBFF", color: "#7D1BDE" },
      ],
      date: "Norma Hicks - 18th June 2022",
    },
  ];
  return (
    <Container className="LearningCenter">
      <Row>
        <Col xs={12} md={6}>
          <h1>Learning Center</h1>
        </Col>
        <Col
          xs={12}
          md={6}
          className="rightSection d-flex justify-content-md-end order-md-1 order-2"
        >
          <div className="primaryButtonDiv">
            <PrimaryButton text="More Articles" />
          </div>
        </Col>
        {cards.map((card, index) => {
          return (
            <Col
              xs={12}
              md={6}
              lg={4}
              className="mb-4 mb-lg-0 order-1"
              key={index}
            >
              <MainCard
                link={card.link}
                img={card.img}
                title={card.title}
                body={card.body}
                labels={card.labels}
                date={card.date}
              />
            </Col>
          );
        })}
      </Row>
      <hr className="speaceBtwSections" />
    </Container>
  );
};

export default LearningCenter;
