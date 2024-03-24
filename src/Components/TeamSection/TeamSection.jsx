import React from 'react' ;
import { Col, Container, Row } from 'react-bootstrap';
import SectionHeader from '../SectionHeader/SectionHeader';


import "./TeamSection.css"

import Jeswin from "../../assets/img/jeswin.jpg"
import Porselvan from "../../assets/img/porselvan.jpg"
import Sakkthivel from "../../assets/img/sakkthivel.jpeg"
import Madhav from "../../assets/img/madhav.jpeg"
import Rishab from "../../assets/img/rishab.jpeg"
import TeamCard from '../TeamCard/TeamCard';

function TeamSection() {
  return (
    <Container className='team-section'>
      <SectionHeader header="Our Team" />
      <Row className='members-row-one'>
        <Col lg="5">
            <TeamCard 
            quote="Take the first step today <br /> In the stairs to Reach the Cloud" 
            image={Madhav} title="Madhavakumar D" 
            designation="AWS Cloud Club Captain" />
        </Col>
      </Row>
      <Row className='members-row-two'>
        <Col lg="5">
            <TeamCard 
            quote="The infrastructure of the future is being built by technology, with the architect, AWS cloud." 
            image={Sakkthivel} title="Sakkthivel T"  
            designation="Technology Lead"/>
        </Col>
        <Col lg="5" className='right-member'>
            <TeamCard quote="Scale Your Dreams with AI, <br /> Fuel Your Ambitions with AWS Cloud." 
            image={Porselvan} title="Porselvan P" 
            designation="Aritificial Intelligence Lead"/>
        </Col>
      </Row>
      
      <Row className='members-row-three'>
        <Col lg="5">
            <TeamCard quote="Just keep on increasing your FullStack. <br /> At one point, you will Reach the Cloud" 
            image={Rishab} 
            title="Rishab H" 
            designation="Full-Stack Lead"/>
        </Col>

        <Col lg="5"  className='right-member'>
            <TeamCard quote="Cloud connects servers, while a Community connects people." 
            image={Jeswin} title="Jeswin Joseph J" 
            designation="Social Outreach Lead"/>
        </Col>
      </Row>
      
    </Container>
  );
}


export default TeamSection ;
