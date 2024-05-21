import React from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import python from "../../../assets/python.png"
import Carousel from 'react-bootstrap/Carousel'; 

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
            <Row>
            Python is a versatile, high-level programming language known for its readability and ease of use, making it ideal for both beginners and experienced developers. It is widely used across various domains, including web development, data analysis, artificial intelligence, scientific computing, and automation.
            </Row>
            <Row>
                <Col className="modal-container modal-text" sm = {4}>
                    <img src={python} className='modal-logo' />
                </Col>
                <Col className="modal-container modal-text" sm = {8}>
                  <Row>
                    <span>My skill level</span>
                    <div className='skill-bar'>
                      <div className="advanced">
                        
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <span>Skill Use Rate</span>
                    <div className='skill-bar'>
                      <div className="advanced">
                        
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <span>Using the program since 2020</span>
                  </Row>
                  <Row>
                    <span>I commonly use python for:</span>
                    <ul>
                      <li>Data Analysis</li>
                      <li>Otomatization</li>
                      <li>Numerical Engineering</li>
                      <li>Web Scraping</li>
                    </ul>
                  </Row>
                </Col>
            </Row>
            <Row className='carousel-row'>
              <span>My Project with Python</span>
              <Carousel>
                <Carousel.Item>
                  <img 
                    className="d-block w-100"
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                    alt="Image One"
                  /> 
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img 
                    className="d-block w-100"
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                    alt="Image One"
                  /> 
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img 
                    className="d-block w-100"
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                    alt="Image One"
                  /> 
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>  
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
