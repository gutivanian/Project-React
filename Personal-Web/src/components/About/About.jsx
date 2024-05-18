import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import Github from "./Github";
import Tech from "./Tech";
import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
import imgAbout from "../../assets/img-about.jpg";
import Tools from "./Tools";
import ImageSlider from "./ImageSlider";

const images = [
  {
    imgURL:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    imgAlt: "img-1"
  },
  {
    imgURL:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    imgAlt: "img-2"
  },
  {
    imgURL:
      "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    imgAlt: "img-3"
  },
  {
    imgURL:
      "https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    imgAlt: "img-4"
  }
];
function About() {
  return (
    <Container fluid className="about-section">
      {/* <Partcle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }} className="about-h1 title main-name">
              Let Me Introduce My Self
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Row className="about-img-row">
              {/* <img src={imgAbout} alt="about" className="img-fluid" /> */}
              <ImageSlider>
                {images.map((image, index) => {
                  return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
                })}
              </ImageSlider>
            </Row>
            <Row className="about-motto">
                <p>
                Apart from coding, some other activities that I love to do!
                </p>
                <ul>
                  <li>Traveling</li>
                  <li>Playing Chess</li>
                  <li>Reading</li>
                  <li>Doing Science</li>
                  <li>Listening to Music</li>
                </ul>
            </Row>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="main-name">Skillset </strong>
        </h1>

        <Tech />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Tools />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;