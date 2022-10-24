import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./FreeDemo.scss";
import MainCard from "../ui/MainCard/MainCard";
import Image1 from "../../assets/images/FreeDemo/Image1.webp";
import Image2 from "../../assets/images/FreeDemo/Image2.webp";
import Image3 from "../../assets/images/FreeDemo/Image3.webp";

function FreeDemo() {
  const cards = [
    {
      link: "#",
      img: Image1,
      title: "Time Management",
      body: "It cultivates personal and professional skills that will help you advance in your career.",
      buttonText: "Learn More",
    },
    {
      link: "#",
      img: Image2,
      title: "Emotional Intelligence",
      body: "It cultivates personal and professional skills that will help you advance in your career.",
      buttonText: "Learn More",
    },
    {
      link: "#",
      img: Image3,
      title: "Ten Soft Skills You Need",
      body: "It cultivates personal and professional skills that will help you advance in your career.",
      buttonText: "Learn More",
    },
  ];
  return (
    <Row className="FreeDemo">
      <Col xs={12}>
        <h1>Free Demo</h1>
      </Col>
      {cards.map((card, index) => {
        return (
          <Col xs={12} md={6} lg={4} className="mb-4 mb-lg-0" key={index}>
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
  );
}

export default FreeDemo;
