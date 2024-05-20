import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FotoAtas from "../../Assets/Foto-Atas.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import Particle from "../Particle";
import Page2 from "./Page2";
import Typing from "./Typing";


function Page1() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
                <div className="welcome">
                  <div>
                    <h1 style={{ paddingBottom: 15 }} className="heading">
                      Nice To Meet You!{" "}
                      <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                      </span>
                    </h1>
                  </div>
    
                  <h1 className="heading-name">
                    I'M
                    <strong className="main-name"> GUTIVAN ALIEF SYAHPUTRA</strong>
                  </h1>
                </div>

              <div className="typewriter-box">
                <Typing />
              </div>
              <div className="short-info">
              I'm Gutivan Alief Syahputra, a theoretical physics ⚛️ master's graduate from ITS Surabaya, passionate about merging scientific knowledge with cutting-edge technology 💻 to solve real-world problems and enhance quality of life 🌍.
              </div>
              <Row>
                <Col md={12} className="home-about-social">
                  <h1>FIND ME ON</h1>
                  <p>
                    Feel free to <span className="purple">connect </span>with me
                  </p>
                  <ul className="home-about-social-links">
                    <li className="social-icons">
                      <a
                        href="https://github.com/soumyajit4419"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                         <i className="fab fa-github icon"></i>
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://twitter.com/Soumyajit4419"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <i className="fab fa-facebook-f icon"></i>
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://twitter.com/Soumyajit4419"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <i className="fab fa-twitter icon"></i>
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://www.linkedin.com/in/soumyajit4419/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <i className="fab fa-linkedin icon"></i>
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://www.instagram.com/soumyajit4419"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                      >
                        <i className="fab fa-instagram icon"></i>
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>

            <Col md={5} >
              <div className="img-container">
                <div className="home-img">
                    
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Page1;