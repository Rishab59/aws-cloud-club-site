import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Lottie from 'lottie-react';

import "./GallerySection.css"
import SectionHeader from '../SectionHeader/SectionHeader';

import noMoments from '../../assets/animation/moments.json';

function GallerySection() {
  return (
    <Container className='gallery-section'>
        <SectionHeader header="Moments" />
        <Row className='row-gallery'>
            <Col sm={3}>
            <Lottie animationData={noMoments}></Lottie>
            </Col>
            
            <h1 className='gallery-tag'>Making best moments, We will add it soon!</h1>
        </Row>
    </Container>
  );
}

export default GallerySection;
