import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Assessments.scss";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import AssessmentsImg from "../../assets/images/Assessments/Assessments.webp";

const Assessments = () => {
  return (
    <Container className="Assessments">
      <Row>
        <Col md={6} className="leftSection px-md-0">
          <img src={AssessmentsImg} alt="Who were are" width="100%" />
        </Col>
        <Col md={6} className="rightSection ps-4">
          <div>
            <h1>Assessments</h1>
            <p>
              An old mantra in human resources’ circles has been to hire for
              attitude and to train for skill. Organizations are competing today
              -more than any time before- on talents, in terms of acquisition,
              development, and management.
            </p>
            <PrimaryButton text="Read More" />
          </div>
        </Col>
      </Row>
      <hr className="speaceBtwSections" />
    </Container>
  );
};

export default Assessments;
