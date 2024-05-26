import React from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import python from "../../../assets/python.png"
import Carousel from 'react-bootstrap/Carousel'; 
import utbk from "../../../assets/project/utbk.jpg"

function PythonModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='modal-title'>
          Python
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
            <Row className='skill-level'>
                <Col className="modal-container" sm = {4}>
                    <img src={python} className='modal-logo' />
                </Col>
                <Col className="modal-container modal-text" sm = {8}>
                  <br />
                  <Row>
                    <span className='skill-title skill-text'>My skill level</span>
                    <div className='skill-bar'>
                      <div className="advanced"></div>
                    </div>
                  </Row>
                  <br />
                  <Row>
                    <span className='skill-title skill-text'>Skill Use Rate</span>
                    <div className='skill-bar'>
                      <div className="advanced"></div>
                    </div>
                  </Row>
                  <br />
                  <Row>
                    <span className='skill-text'>Using the program since 2020</span>
                  </Row>
                  <br />
                  <Row>
                    <span className='skill-text'>I commonly use python for:</span>
                    <ul className='modal-list'>
                      <li>Data Analysis</li>
                      <li>Otomatization</li>
                      <li>Numerical Engineering</li>
                      <li>Web Scraping</li>
                    </ul>
                  </Row>
                </Col>
            </Row>
            {/* <br /> */}
            <br />
            <Row className='carousel-row'>
              <br />
              {/* <br /> */}
              <h3>My Project with Python</h3>
              <br/>
              <div className='carousel-container'>
                <Carousel>
                  <Carousel.Item>
                    <a href='https://github.com/gutivanian/UTBK-2019-Analisis-Proses-Seleksi'>
                      <img 
                        className="d-block w-100"
                        src= {utbk}
                        alt="Image One"
                      /> 
                    </a>
                    <div className="carousel-caption-custom">
                      <a href='https://github.com/gutivanian/UTBK-2019-Analisis-Proses-Seleksi'>
                        UTBK 2019 Data Analysis
                      </a>
                      {/* <p>In this notebook, I will explore the 2019 UTBK results data. We will start from cleaning and transforming the data for further processing: visualizing to find out the capacity for new student admissions given by PTN through the UTBK route.</p> */}
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img 
                      className="d-block w-100"
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                      alt="Second slide"
                    /> 
                    <div className="carousel-caption-custom">
                      <h5>Second slide label</h5>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img 
                      className="d-block w-100"
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                      alt="Third slide"
                    /> 
                    <div className="carousel-caption-custom">
                      <a href='https://github.com/gutivanian/UTBK-2019-Analisis-Proses-Seleksi'>
                        <h5>Third slide label</h5>
                      </a>
                      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </div>
                  </Carousel.Item>
                </Carousel>  
              </div>
            </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PythonModal;
