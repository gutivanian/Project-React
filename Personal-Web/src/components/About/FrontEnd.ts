import React from "react";
import { Col, Row } from "react-bootstrap";
import vscode from "../../assets/Tool/vscode.png"
import cmd from "../../assets/Tool/cmd.png"
import git from "../../assets/Tool/git.png"
import github from "../../assets/Tool/github.png"
import pycharm from "../../assets/Tool/pycharm.png"
import docker from "../../assets/Tool/docker.png"
import jitbit from "../../assets/Tool/jitbit.png"
import wolfram from "../../assets/Tool/wolfram.png"
import jupyter from "../../assets/Tool/jupyter.png"
import texstudio from "../../assets/Tool/texstudio.png"

function FrontEnd() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vscode} alt="VSCode" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={cmd} alt="cmd" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={git} alt="git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={github} alt="Github" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={pycharm} alt="PyCharm" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={docker} alt="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={jitbit} alt="Jitbit" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={wolfram} alt="Mathematica" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={jupyter} alt="Jupyter" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={texstudio} alt="TEXStudio" />
      </Col>
    </Row>
  );
}

export default FrontEnd;
