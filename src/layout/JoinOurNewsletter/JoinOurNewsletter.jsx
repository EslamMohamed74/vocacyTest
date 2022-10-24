import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./JoinOurNewsletter.scss";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";

const JoinOurNewsletter = () => {
  return (
    <Container className="JoinOurNewsletter">
      <Row>
        <Col md={6}>
          <h1>Join Our Newsletter</h1>
          <p>Subscribe To Newsletter To Stay Up To Date On Our Latest News</p>
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <Form className="d-flex flex-wrap flex-md-nowrap">
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              aria-label="Enter your email address"
              className="me-md-4"
            />
              <PrimaryButton text="Submit" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default JoinOurNewsletter;
