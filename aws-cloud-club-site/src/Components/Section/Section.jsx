import React from 'react'

import "./Section.css"

import SectionHeader from './SectionHeader/SectionHeader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lottie from 'lottie-react';


import animationData from '../../assets/animation/about.json'; 

function Section() {
  return (
    <Container fluid className='section'>
        
      <SectionHeader header = "About Us"/>
      <Row className="section-row">
        <Col className="section-content">
            <h4>A Technical Community of AWS for Students, By Students.</h4>
          
        </Col>
        <Col className="section-content">
            <Lottie animationData={animationData} loop autoplay speed={1.5} ></Lottie>
          
        </Col>
      </Row>
    </Container>
  )
}

export default Section
