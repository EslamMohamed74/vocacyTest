import React, { useState } from "react";
import { Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import "./Sidebar.scss";
import Logo from "../../assets/images/Logo.svg";
import Search from "../../assets/images/Search.svg";
import SearchWhite from "../../assets/images/Searchwhite.webp";

const Sidebar = ({ show, closeSideNavbar, openSearch }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className={`sidebar ${show ? "" : "hidden"}`}>
      <Container fluid>
        <Row>
          <Col>
            <img
              src={Logo}
              className="d-inline-block align-top"
              alt="Vocacy logo"
            />
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <span className="searchIcon">
              <img
                src={hover ? SearchWhite : Search}
                alt="Search"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={openSearch}
              />
            </span>

            <IoClose size={30} onClick={closeSideNavbar} />
          </Col>

          <Col xs={12}>
            <Nav>
              <Nav.Link href="#HOME">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <NavDropdown title="Solutions" id="solutionsNavDropdown">
                <NavDropdown
                  title="Immersive VR/AI Learning"
                  id="ImmersiveNavDropdown"
                  className="ps-3"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Talepin
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Mursion
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Alelo</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Immersive VR/AI Learning"
                  id="GameBasedNavDropdown"
                  className="ps-3"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Gamified Business Simulation
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Team Building Activity
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Coaching & Mentoring"
                  id="CoachingNavDropdown"
                  className="ps-3"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Core Idea
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <NavDropdown title="Courses" id="coursesNavDropdown">
                <NavDropdown.Item href="#action/3.1">
                  Hybrid Learning
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Administrative Skills Courses
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Career Development Courses
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Human Resources Courses
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Personal Development Courses
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Sales and Marketing Courses
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Supervisors & Managers Courses
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Workplace Essentials Courses
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Contact" id="contactNavDropdown">
                <NavDropdown.Item href="#action/3.1">
                  Contact Us
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Talk to Expert
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#BLOG">Blog</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sidebar;
