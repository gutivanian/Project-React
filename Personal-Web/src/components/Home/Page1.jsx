import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FotoAtas from "../../Assets/Foto-Atas.png";
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
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Nice To Meet You!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> GUTIVAN ALIEF SYAHPUTRA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Typing />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={FotoAtas}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Page2 />
    </section>
  );
}

export default Page1;