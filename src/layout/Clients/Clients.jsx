import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "./Clients.scss";
import Logo1 from "../../assets/images/Clients/Logo1.webp";
import Logo2 from "../../assets/images/Clients/Logo2.webp";
import Logo3 from "../../assets/images/Clients/Logo3.webp";
import Logo4 from "../../assets/images/Clients/Logo4.webp";
import Logo5 from "../../assets/images/Clients/Logo5.webp";

const Clients = () => {
  const images = [Logo1, Logo2, Logo3, Logo4, Logo5];
  return (
    <Container className="Clients">
      <Row>
        <h1>Clients</h1>
        <Col xs={12}>
          <Swiper
            slidesPerView={3}
            freeMode={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, FreeMode]}
            className="mySwiper"
          >
            {images.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={image} alt={`logo${index + 1}`} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Col>
      </Row>
      <hr className="speaceBtwSections" />
    </Container>
  );
};

export default Clients;
