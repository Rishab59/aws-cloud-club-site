import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "./EventsSection.css"
import SectionHeader from "../SectionHeader/SectionHeader";
import EventsCard from './EventsCard/EventsCard';
import DetailsCard from './DetailsCard/DetailsCard';

import inaugurationPoster from '../../assets/img/inauguration.jpg'

function EventsSection() {
  return (
    <Container className='events-section'>
      <SectionHeader header="Upcoming Events" />
        <Row>
            <Col lg={5}>
            <EventsCard image={inaugurationPoster} title="Inauguration Ceremony"></EventsCard>
            </Col>
            <Col lg={7} style={{paddingLeft: "40px"}}>
              <h1 className='event-title'>Inauguration Ceremony</h1>
              <p className='para'>
                Celebrate with us on the grand occasion of the inauguration of 
                <b>AWS Cloud Club Panimalar - Chennai</b>, set to take place on Tuesday, 
                March 26th 2024.  Save the date and mark your calendars to be part of this momentous 
                occasion. We look forward to welcoming you and sharing the excitement as we delve 
                into the limitless possibilities of the AWS Cloud.</p>
                
              <DetailsCard 
              speaker="Mr. Sarannithish K S" 
              mode="Hybrid" 
              date="26th March, 2024" 
              time="8:00 AM [IST]" 
              participants="120" sponsor="--"></DetailsCard>
            </Col>
        </Row>
    </Container>
  );
}

export default EventsSection;
