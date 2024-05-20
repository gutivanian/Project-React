import React from "react";
import { Col, Row } from "react-bootstrap";
import html5 from "../../assets/Fullstack/html5.png";
import css3 from "../../assets/Fullstack/css3.png";
import javascript from "../../assets/javascript.png"
import bootstrap from "../../assets/Fullstack/bootstrap.png";
import tailwind from "../../assets/Fullstack/tailwind.png";
import react from "../../assets/Fullstack/react.png";
import redux from "../../assets/Fullstack/redux.png";
import nodejs from "../../assets/Fullstack/nodejs.png";
import express from "../../assets/Fullstack/express.png"
import redis from "../../assets/Fullstack/redis.png"
import mongo from "../../assets/Fullstack/mongo.png"
import postgresql from "../../assets/Data Analyst/postgresql.png"
function Fullstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={html5} alt="HTML 5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={css3} alt="CSS 3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={javascript} alt="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={bootstrap} alt="Bootstrap" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={tailwind} alt="Tailwind CSS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={react} alt="React JS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={redux} alt="React Redux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={nodejs} alt="Node JS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={express} alt="Express JS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={redis} alt="Redis" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={postgresql} alt="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={mongo} alt="MongoDB" />
      </Col>
    </Row>
  );
}

export default Fullstack;
