import React from "react";
import "./Home.scss";
import MainNavbar from "../../layout/MainNavbar/MainNavbar";
import Intro from "../../layout/Intro/Intro";
import WhoWereAre from "../../layout/WhoWereAre/WhoWereAre";
import Hints from "../../layout/Hints/Hints";
import CoursesCategory from "../../layout/CoursesCategory/CoursesCategory";
import Assessments from "../../layout/Assessments/Assessments";
import Clients from "../../layout/Clients/Clients";
import Partners from "../../layout/Partners/Partners";
import LearningCenter from "../../layout/LearningCenter/LearningCenter";
import JoinOurNewsletter from "../../layout/JoinOurNewsletter/JoinOurNewsletter";
import Footer from "../../layout/Footer/Footer";
const Home = () => {
  return (
    <>
      <MainNavbar />
      <div className="home">
        <Intro />
        <WhoWereAre />
        <Hints
          col={6}
          mainText="On-Demand Learning... Learn As You Go"
          buttonText="Request A Demo"
          video={true}
        />
        {/* <CoursesCategory /> */}
        <Hints
          col={7}
          mainText="We Can Help You With An Excellent Business Consulting"
          buttonText="Learn More"
        />
        <Assessments />

        <Hints
          col={8}
          mainText="We Can Help You With An Excellent Coaching & Mentoring"
          buttonText="Learn More"
        />
        <Clients />
        <Partners />
        <LearningCenter />
        <JoinOurNewsletter />
      </div>
      <Footer />
    </>
  );
};

export default Home;
