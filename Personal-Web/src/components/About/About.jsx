import React, { useState } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import ImageSlider from "./ImageSlider";
import SkillButtons from "./SkillButtons";
import { FaDownload } from "react-icons/fa";
import cvid from "../../assets/CV-id.pdf";
import img1 from "../../assets/about-1.jpeg";
import img2 from "../../assets/about-2.jpeg";
import img3 from "../../assets/about-3.jpeg";
import img4 from "../../assets/about-4.jpeg";
import img5 from "../../assets/about-5.jpeg";
import img6 from "../../assets/about-6.jpeg";
import img7 from "../../assets/about-7.jpeg";
import img8 from "../../assets/about-8.jpeg";
import img9 from "../../assets/about-9.jpeg";
import img10 from "../../assets/about-10.jpeg";
import img11 from "../../assets/about-11.jpeg";

const images = [
  { imgURL: img1, imgAlt: "img-1" },
  { imgURL: img2, imgAlt: "img-2" },
  { imgURL: img3, imgAlt: "img-3" },
  { imgURL: img4, imgAlt: "img-4" },
  { imgURL: img5, imgAlt: "img-5" },
  { imgURL: img6, imgAlt: "img-6" },
  { imgURL: img7, imgAlt: "img-7" },
  { imgURL: img8, imgAlt: "img-8" },
  { imgURL: img9, imgAlt: "img-9" },
  { imgURL: img10, imgAlt: "img-10" },
  { imgURL: img11, imgAlt: "img-11" },
];

function About() {
  const [skill, setSkill] = useState("prolang");
  const [activeButton, setActiveButton] = useState("prolang");

  const handleButtonClick = (skillName) => {
    setSkill(skillName);
    setActiveButton(skillName);
  };

  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }} className="about-h1 title main-name">
              Let Me Introduce Myself
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingTop: "25px", paddingBottom: "0px" }} className="about-img">
            <Row className="about-img-row">
              <div className="about-img-container">
                <ImageSlider>
                  {images.map((image, index) => (
                    <img key={index} src={image.imgURL} alt={image.imgAlt} />
                  ))}
                </ImageSlider>
              </div>
            </Row>
            <Row>
              <div className="cv">
                <h2 className="main-name">
                  More info <span className="underlined">about me</span>
                </h2>
                <Button href={cvid} download className="download-cv">
                  <FaDownload /> &nbsp;Download My Resume
                </Button>
              </div>
            </Row>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="main-name">Skillset </strong>
        </h1>
        <div className="skill-button">
          <ButtonGroup aria-label="Basic example" className="py-6 mb-2 skill-button" size="lg">
            <Button
              variant="secondary"
              className={activeButton === "prolang" ? "skill-active" : ""}
              onClick={() => handleButtonClick("prolang")}
            >
              <span>
                Programming Languages
              </span><i></i>
            </Button>
            <Button
              variant="secondary"
              className={activeButton === "tool" ? "skill-active" : ""}
              onClick={() => handleButtonClick("tool")}
            >
              <span>
                Tools
              </span> <i></i>
            </Button>
            <Button
              variant="secondary"
              className={activeButton === "danal" ? "skill-active" : ""}
              onClick={() => handleButtonClick("danal")}
            >
              <span>
                Data Analysis
              </span> <i></i>
            </Button>
            <Button
              variant="secondary"
              className={activeButton === "fullstack" ? "skill-active" : ""}
              onClick={() => handleButtonClick("fullstack")}
            >
              <span>
                Fullstack
              </span><i></i>
            </Button>
          </ButtonGroup>
        </div>
        <SkillButtons skill={skill} />
      </Container>
    </Container>
  );
}

export default About;
