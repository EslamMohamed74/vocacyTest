import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./WhoWereAre.scss";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import Image from "../../assets/images/WhoWereAre/Image.webp";

const WhoWereAre = () => {
  return (
    <Container className="WhoWereAre">
      <Row className="px-3 px-md-0">
        <Col md={6} lg={8} className="leftSection px-0 pe-md-0">
          <img src={Image} alt="Who were are" width="100%" />
        </Col>
        <Col md={6} lg={4} className="rightSection">
          <div>
            <h1>Who We Are</h1>
            <p>
              Vocacy provides innovative talent development solutions, leaving
              our fingerprint in business communities to create an enhanced
              intelligent workplace. We offer authentic interaction that engage
              the emotional and cognitive functions for learning that drive true
              behavioral change.
            </p>
            <PrimaryButton text="Read More" />
          </div>
        </Col>
      </Row>
      <hr className="speaceBtwSections" />
    </Container>
  );
};

export default WhoWereAre;
