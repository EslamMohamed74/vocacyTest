import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import "./MainNavbar.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import FreeDemo from "../../components/FreeDemo/FreeDemo";
import Solutions from "../../components/Solutions/Solutions";
import Logo from "../../assets/images/Logo.svg";
import Search from "../../assets/images/Search.svg";
import SearchWhite from "../../assets/images/Searchwhite.webp";
import Sidebar from "../Sidebar/Sidebar";

function MainNavbar() {
  const [show, setShow] = useState({
    solutionsNavDropdown: false,
    coursesNavDropdown: false,
    contactNavDropdown: false,
  });
  const showDropdown = (e) => {
    e.target.id
      ? setShow((prev) => ({ ...prev, [e.target.id]: !prev[e.target.id] }))
      : setShow((prev) => ({
          ...prev,
          [e.target.attributes["class"]?.value.split(" ")[0]]:
            !prev[e.target.attributes["class"]?.value.split(" ")[0]],
        }));
  };
  const hideDropdown = (e) => {
    e.target.id
      ? setShow((prev) => ({ ...prev, [e.target.id]: false }))
      : setShow((prev) => ({
          ...prev,
          [e.target.attributes["class"]?.value.split(" ")[0]]: false,
        }));
  };
  const [hover, setHover] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSideNavbar, setShowSideNavbar] = useState(false);

  return (
    <>
      <Navbar
        expand="xl"
        sticky="top"
        onMouseLeave={() =>
          setShow({
            solutionsNavDropdown: false,
            coursesNavDropdown: false,
            contactNavDropdown: false,
          })
        }
      >
        <Container fluid className="mx-4">
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              className="d-inline-block align-top"
              alt="Vocacy logo"
            />
          </Navbar.Brand>
          <Nav.Link
            className="searchIcon ms-auto d-inline-block d-lg-none"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setShowSearchBar(true)}
          >
            <img src={hover ? SearchWhite : Search} alt="Search" />
          </Nav.Link>
          <Navbar.Toggle onClick={() => setShowSideNavbar(true)} />
          <Navbar.Collapse className="d-none d-xl-block">
            <Nav className="ms-auto">
              <Nav.Link href="#HOME">HOME</Nav.Link>
              <Nav.Link href="#pricing">ABOUT</Nav.Link>
              <NavDropdown
                title="SOLUTIONS"
                id="solutionsNavDropdown"
                className="solutionsNavDropdown"
                show={show.solutionsNavDropdown}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <Solutions />
              </NavDropdown>
              <NavDropdown
                title="COURSES"
                id="coursesNavDropdown"
                className="coursesNavDropdown"
                show={show.coursesNavDropdown}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <Row>
                  <Col xs={3}>
                    <NavDropdown.Item href="#action/3.1">
                      Courses
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Administrative Skills Courses
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Career Development Courses
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Human Resources Courses
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Personal Development Courses
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Sales and Marketing Courses
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Supervisors & Managers Courses
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Workplace Essentials Courses
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Microsoft Office Courses
                    </NavDropdown.Item>
                  </Col>
                  <Col>
                    <FreeDemo />
                  </Col>
                </Row>
              </NavDropdown>
              <Nav.Link href="#BLOG">BLOG</Nav.Link>
              <NavDropdown
                title="contact"
                id="contactNavDropdown"
                className="contactNavDropdown"
                show={show.contactNavDropdown}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item href="#action/3.1">
                  Contact Us
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Talk to Expert
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="rquestADemo" href="#memes">
                REQUEST A DEMO
              </Nav.Link>
              <Nav.Link
                className="searchIcon"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setShowSearchBar(true)}
              >
                <img src={hover ? SearchWhite : Search} alt="Search" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SearchBar
        show={showSearchBar}
        closeSearch={() => setShowSearchBar(false)}
      />
      <Sidebar
        show={showSideNavbar}
        closeSideNavbar={() => setShowSideNavbar(false)}
        openSearch={() => setShowSearchBar(true)}
      />
    </>
  );
}

export default MainNavbar;
