import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "./Partners.scss";
import Logo1 from "../../assets/images/Partners/Logo1.webp";
import Logo2 from "../../assets/images/Partners/Logo2.webp";
import Logo3 from "../../assets/images/Partners/Logo3.webp";
import Logo4 from "../../assets/images/Partners/Logo4.webp";

const Partners = () => {
  const images = [Logo1, Logo2, Logo3, Logo4];
  return (
    <Container className="Partners">
      <Row>
        <h1>Partners</h1>
        <Col xs={12}>
          <Swiper
            slidesPerView={3}
            freeMode={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
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

export default Partners;
