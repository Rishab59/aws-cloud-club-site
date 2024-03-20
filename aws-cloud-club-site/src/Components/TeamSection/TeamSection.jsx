import React from 'react' ;
import { Col, Container, Row } from 'react-bootstrap';
import SectionHeader from '../SectionHeader/SectionHeader';

import "./TeamSection.css"

function TeamSection() {
  return (
    <Container className='team-section'>
        <SectionHeader header="Core Team" />
        <Row>
            <Col>
            </Col>
        </Row>
    </Container>
  )
}

export default TeamSection ;
