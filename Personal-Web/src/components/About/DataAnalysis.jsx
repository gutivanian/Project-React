import React from "react";
import { Col, Row } from "react-bootstrap";
import excel from "../../assets/Data Analyst/excel.png";
import ggplot from "../../assets/Data Analyst/ggplot.png";
import pandas from "../../assets/Data Analyst/pandas.png";
import numpy from "../../assets/Data Analyst/numpy.png";
import scrapy from "../../assets/Data Analyst/scrapy.png";
import matplotlib from "../../assets/Data Analyst/matplotlib.png";
import seaborn from "../../assets/Data Analyst/seaborn.png";
import plotly from "../../assets/Data Analyst/plotly.png";
import sqlite from "../../assets/Data Analyst/sqlite.png";
import powerbi from "../../assets/Data Analyst/powerbi.png";
import tableau from "../../assets/Data Analyst/tableau.png";
import sklearn from "../../assets/Data Analyst/sklearn.png";
import keras from "../../assets/Data Analyst/keras.png";
import postgresql from "../../assets/Data Analyst/postgresql.png"
function DataAnalysis() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={excel} alt="Excel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons cmd">
        <img src={ggplot} alt="ggplot2" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={pandas} alt="Pandas" />
      </Col>
      <Col xs={4} md={2} className="tech-icons github">
        <img src={numpy} alt="Numpy" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={scrapy} alt="Scrapy" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={matplotlib} alt="matplotlib" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={seaborn} alt="Seaborn" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={plotly} alt="Plotly" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={sqlite} alt="SQLite3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={postgresql} alt="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={powerbi} alt="Power BI" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={tableau} alt="Tableau" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={sklearn} alt="Scikit-Learn" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={keras} alt="Keras" />
      </Col>
    </Row>
  );
}

export default DataAnalysis;
