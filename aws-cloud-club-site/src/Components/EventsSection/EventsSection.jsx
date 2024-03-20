import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "./EventsSection.css"
import SectionHeader from "../SectionHeader/SectionHeader";

function EventsSection() {
  return (
    <Container className='events-section'>
      <SectionHeader header="Upcoming Events" />
        <Row>
            <Col></Col>
        </Row>
    </Container>
  );
}

export default EventsSection;
