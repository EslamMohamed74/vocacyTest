import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";
import Logo from "../../assets/images/Logo.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <Container>
        <Row>
          <Col md={4} lg={3}>
            <img src={Logo} alt="Vocacy logo" />
            <div className="social">
              <a href="#">
                <FaFacebookF color="white" />
              </a>
              <a href="#">
                <FaTwitter color="white" />
              </a>
              <a href="#">
                <FaLinkedinIn color="white" />
              </a>
              <a href="#">
                <FaInstagram color="white" />
              </a>
              <a href="#">
                <FaYoutube color="white" />
              </a>
            </div>
          </Col>
          <Col xs={6} md={4} lg={3} className="order-sm-1 order-2">
            <h5>Categories</h5>
            <ul>
              <li>
                <a href="#">Administrative Skills</a>
              </li>
              <li>
                <a href="#">Career Development</a>
              </li>
              <li>
                <a href="#">Human Resources</a>
              </li>
              <li>
                <a href="#">Personal Development</a>
              </li>
              <li>
                <a href="#">Sales and Marketing</a>
              </li>
              <li>
                <a href="#">Supervisors and Managers</a>
              </li>
              <li>
                <a href="#">Workplace Essentials</a>
              </li>
              <li>
                <a href="#">Microsoft Office</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={4} lg={3} className="order-sm-1 order-2">
            <h5>Resources</h5>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4} lg={3} className="order-1 my-4 my-md-0">
            <h5>Connect with us</h5>
            <h6>KSA Office:</h6>
            <p>Address: Al Olaya District, Riyadh, KSA.</p>
            <p>Phone: +966 11 463 4518.</p>
            <h6>Egypt Office:</h6>
            <p>
              Address: Bab Sharq District, Ethad El Mostaqbal Towers,
              Alexandria.
            </p>
            <p>Phone: 034286234.</p>
          </Col>
        </Row>
        <Row className="subFooter">
          <p>
            Copyright © <b>Vocacy</b> | Developed by <b>InTelligancia</b>
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
