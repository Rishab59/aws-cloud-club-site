import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./Credits.css"


function Credits() {
    return (
        <Container className='credits-container'>
            <Row>
                <Col className='credits'>
                <h6> Designed and Developed by Rishab H and Jeswin Joseph J </h6>
                </Col>
                <Col lg={3}>
                <h6> Designed and Developed by Rishab H and Jeswin Joseph J </h6>
                </Col>
            </Row>
        </Container>
    );
}

export default Credits;
