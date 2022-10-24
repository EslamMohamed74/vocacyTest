import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./CoursesCategory.scss";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import MainCard from "../../components/ui/MainCard/MainCard";
import AdministrativeSkills from "../../assets/images/CoursesCategory/AdministrativeSkills.webp";
import CareerDevelopment from "../../assets/images/CoursesCategory/CareerDevelopment.webp";
import HumanResources from "../../assets/images/CoursesCategory/HumanResources.webp";
import PersonalDevelopment from "../../assets/images/CoursesCategory/PersonalDevelopment.webp";
import SalesandMarketing from "../../assets/images/CoursesCategory/SalesandMarketing.webp";
import SupervisorsManagers from "../../assets/images/CoursesCategory/SupervisorsManagers.webp";
import WorkplaceEssentials from "../../assets/images/CoursesCategory/WorkplaceEssentials.webp";
import MicrosoftOffice from "../../assets/images/CoursesCategory/MicrosoftOffice.webp";

const CoursesCategory = () => {
  const cards = [
    {
      link: "#",
      img: AdministrativeSkills,
      title: "Administrative Skills",
      body: "Many companies in different industries seek candidates with administrative skills.",
      buttonText: "Learn More",
    },
    {
      link: "#",
      img: CareerDevelopment,
      title: "Career Development",
      body: "With GBL, all your learning activities through gamification will be fun and engaging.",
      buttonText: "Learn More",
    },
    {
      link: "#",
      img: HumanResources,
      title: "Human Resources",
      body: "Courses provide additional skills, knowledge, and skills for working in this exciting field.",
      buttonText: "Learn More",
    },
    {
      link: "#",
      img: PersonalDevelopment,
      title: "Personal Development",
      body: "It consists of activities that develop a person's capabilities, potential & enhances life.",
      buttonText: "Learn More",
    },
    {
      link: "#",
      img: SalesandMarketing,
      title: "Sales and Marketing",
      body: "Sales and Marketing go indivisibly when building the image & reputation your brand.",
      buttonText: "Learn More",
    },
    {
      link: "#",
      img: SupervisorsManagers,
      title: "Supervisors & Managers",
      body: "Sales and Marketing go indivisibly when building the image & reputation your brand.",
      buttonText: "Learn More",
    },
    {
      link: "#",
      img: WorkplaceEssentials,
      title: "Workplace Essentials",
      body: "Sales and Marketing go indivisibly when building the image & reputation your brand.",
      buttonText: "Learn More",
    },
    {
      link: "#",
      img: MicrosoftOffice,
      title: "Microsoft off ice",
      body: "Sales and Marketing go indivisibly when building the image & reputation your brand.",
      buttonText: "Learn More",
    },
  ];
  return (
    <Container className="CoursesCategory">
      <Row>
        <Col xs={12} md={8} lg={6}>
          <h1>Courses Category</h1>
          <p>
            Vocacy provides innovative talent development solutions, leaving our
            fingerprint in business.
          </p>
        </Col>
        <Col
          xs={12}
          md={4}
          lg={6}
          className="rightSection d-md-flex justify-content-end order-md-1 order-2"
        >
          <div>
            <PrimaryButton text="All Courses" />
          </div>
        </Col>
        <Col xs={12} className="order-1">
          <Swiper
            slidesPerView={1.175}
            spaceBetween={24}
            freeMode={true}
            navigation={true}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
            }}
            modules={[FreeMode, Navigation]}
            className="mySwiper"
          >
            {cards.map((card, index) => {
              return (
                <SwiperSlide key={index}>
                  <MainCard
                    link={card.link}
                    img={card.img}
                    title={card.title}
                    body={card.body}
                    buttonText={card.buttonText}
                  />
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

export default CoursesCategory;
