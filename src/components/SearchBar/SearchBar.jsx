import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import "./SearchBar.scss";
import Search from "../../assets/images/Search.svg";
import SearchWhite from "../../assets/images/Searchwhite.webp";

function SearchBar({ show, closeSearch }) {
  const [hover, setHover] = useState(false);
  return (
    <div className={`SearchBar ${show ? "" : "hidden"}`}>
      <Container>
        <Row>
          <Col>
            <Form className="d-flex align-items-center">
              <Form.Control
                type="email"
                placeholder="Type your search words…"
                aria-label="Type your search words…"
                className="me-2 me-md-4"
              />
              <span
                className="searchIcon"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <img src={hover ? SearchWhite : Search} alt="Search" />
              </span>

              <IoClose size={30} onClick={closeSearch} />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SearchBar;
