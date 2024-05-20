import React from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import python from "../../../assets/python.png"

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
                <Col className="modal-container modal-text">
                    <img src={python} className='modal-logo' />
                </Col>
                <Col className="modal-container modal-text">

                </Col>
            </Row>
            <Row>

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
