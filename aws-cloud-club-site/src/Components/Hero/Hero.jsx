import React from 'react'
import "./HeroStyles.css"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Hero() {
    return (
      <Container fluid className='hero'>
        <Row className="hero-row">
          <Col className="hero-content">
            <h1>AWS Cloud Club - Panimalar Chennai.</h1>
            <h4>A Technical Community of AWS for Students, By Students.</h4>

            <Button className='btn'>
                Know More
            </Button>

          </Col>
        </Row>
      </Container>
    );
  }

export default Hero;
