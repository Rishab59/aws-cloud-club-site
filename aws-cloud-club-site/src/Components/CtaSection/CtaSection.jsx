import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "./CtaSection.css"
import SectionHeader from '../SectionHeader/SectionHeader';

function CtaSection() {
  return (
    <Container className='cta-section'>
        <SectionHeader header="Join Us" />
        <Row className='cta'>
            <Col sm={12} className="cta-col">
                <h1>Register Now</h1>
            </Col>
        </Row>
    </Container>
  )
}

export default CtaSection;
