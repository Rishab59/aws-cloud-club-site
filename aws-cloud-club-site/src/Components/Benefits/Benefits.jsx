import React from 'react'
import "./Benefits.css"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import SectionHeader from '../SectionHeader/SectionHeader'

import Lottie from 'lottie-react'
import trainingSession from  '../../assets/animation/training.json'
import projects from "../../assets/animation/projects.json"
import mentoring from "../../assets/animation/industry.json"
import certification from "../../assets/animation/certification.json"
import network from "../../assets/animation/networking.json"



function Benefits() {
  return (
    <Container id='Activities' fluid className='section'>
        
      <SectionHeader header = "Benefits"/>
      <Row>
        <Col className="benefits">
            <div className="lottie-container  d-inline-block">
                <Lottie animationData={trainingSession}></Lottie>
            </div>
            <h2 className='caption center'>Training Sessions</h2>
        </Col>

        <Col  className="benefits">
            <div className="lottie-container  d-inline-block">
                <Lottie animationData={projects}></Lottie>
            </div>
            <h2 className='caption center'>Hands-On Projects</h2>
        </Col>
        
        <Col className="benefits">
            <div className="lottie-container  d-inline-block">
                <Lottie animationData={mentoring}></Lottie>
            </div>
            <h2 className='caption center'>Industry Mentoring</h2>
        </Col>
      </Row>
      <Row className="second-row">
        <Col className="benefits">
            <div className="lottie-container  d-inline-block">
                <Lottie animationData={certification}></Lottie>
            </div>
            <h2 className='caption center'>AWS Certification</h2>
        </Col>
        <Col className="benefits">
            <div className="lottie-container  d-inline-block">
                <Lottie animationData={network}></Lottie>
            </div>
            <h2 className='caption center'>Networking & Collaboration</h2>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Benefits;
