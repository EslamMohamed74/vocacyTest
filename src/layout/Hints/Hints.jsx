import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Hints.scss";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";

const Hints = ({col, mainText, buttonText, video = false }) => {
  return (
    <Container className="Hints">
      <Row>
        <Col lg={col} className="leftSection pe-0">
          <h1>{mainText}</h1>
        </Col>
        <Col className="rightSection d-flex justify-content-lg-end">
          <div className="d-flex flex-column justify-content-center">
            <div>
              {video && <PrimaryButton video={true} />}
              <PrimaryButton text={buttonText} />
            </div>
          </div>
        </Col>
      </Row>
      <hr className="speaceBtwSections" />
    </Container>
  );
};

export default Hints;
