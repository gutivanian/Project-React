import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import python from "../../assets/python.png";
import javascript from "../../assets/javascript.png";
import matlab from "../../assets/matlab.png";
import rlang from "../../assets/R.png";
import sql from "../../assets/sql.png";
import dart from "../../assets/dart.png";
import wolfram from "../../assets/Tool/wolfram.png";
import PythonModal from "./SkillModal/PythonModal.jsx";


function ProgrammingLanguage() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleButtonClick = (skillName) => {
    setSelectedSkill(skillName);
  };

  const handleClose = () => {
    setSelectedSkill(null);
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleButtonClick('python')}>
        <img src={python} alt="Python" onClick={() => handleButtonClick('python')} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={javascript} alt="JavaScript" onClick={() => handleButtonClick('javascript')} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={matlab} alt="Matlab" onClick={() => handleButtonClick('matlab')} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={rlang} alt="R Language" onClick={() => handleButtonClick('rlang')} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={sql} alt="SQL" onClick={() => handleButtonClick('sql')} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={dart} alt="Dart" onClick={() => handleButtonClick('dart')} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={wolfram} alt="Mathematica" onClick={() => handleButtonClick('wolfram')} />
      </Col>

      {selectedSkill === 'python' && <PythonModal show={true} onHide={handleClose} />}
\
    </Row>
  );
}

export default ProgrammingLanguage;
