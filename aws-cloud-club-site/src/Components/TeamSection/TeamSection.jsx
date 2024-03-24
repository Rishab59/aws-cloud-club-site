import React from 'react' ;
import { Col, Container, Row, Button } from 'react-bootstrap';
import SectionHeader from '../SectionHeader/SectionHeader';


import "./TeamSection.css"

import Jeswin from "../../assets/img/jeswin.jpg"
import TeamCard from '../TeamCard/TeamCard';

function TeamSection() {
  return (
    <Container className='team-section'>
      <SectionHeader header="Our Team" />
      <Row className='members-row-one'>
        <Col lg="5">
            <TeamCard quote="Take the first step today<br /> In the stairs to Reach the Cloud" image={Jeswin} title="Madhavakumar D" designation="AWS Cloud Club Captain" />
        </Col>
      </Row>
      <Row className='members-row-two'>
        <Col lg="5">
            <TeamCard quote="Take the first step today in the stairs to Reach the Cloud" image={Jeswin} title="Sakkthivel T"  designation="Technology Lead"/>
        </Col>
        <Col lg="5">
            <TeamCard quote="Take the first step today in the stairs to Reach the Cloud" image={Jeswin} title="Porselvan P" designation="Aritificial Intelligence Lead"/>
        </Col>
      </Row>
      
      <Row className='members-row-three'>
        <Col lg="5">
            <TeamCard quote="Just keep on increasing your FullStack. <br /> At one point, you will Reach the Cloud" 
            image={Jeswin} 
            title="Rishab H" 
            designation="Full-Stack Lead"/>
        </Col>

        <Col lg="5">
            <TeamCard quote="Cloud connects servers, while a Community connects people." 
            image={Jeswin} title="Jeswin Joseph J" 
            designation="Social Outreach Lead"/>
        </Col>
      </Row>
      
    </Container>
  );
}


export default TeamSection ;




{/* <Row className='person-row'>
        <Col sm={6} className='person-col'>
          <Card image={nammaChennai} />
          <div className='details-col'>
            <h1 className='name'>Madhavakumar D</h1>
            <h4 className='designation'>AWS Cloud Club Captain</h4>
            <p className='para'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis in eveniet, deleniti autem a nisi hic animi nihil nesciunt soluta, labore minus omnis mollitia iure neque expedita sed voluptatem.</p>
            <div className='connect-btn-div'>
              <Button className='connect-btn'>
                Connect &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </Button>
            </div>
          </div>
        </Col>

        <Col sm={6} className='person-col'>
          <Card image={nammaChennai} />
          <div className='details-col'>
            <h1 className='name'>Sakkthivel T</h1>
            <h4 className='designation'>Tech Lead</h4>
            <p className='para'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis in eveniet, deleniti autem a nisi hic animi nihil nesciunt soluta, labore minus omnis mollitia iure neque expedita sed voluptatem.</p>
            <div className='connect-btn-div'>
              <Button className='connect-btn'>
                Connect &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </Button>
            </div>
          </div>
        </Col>
      </Row> */}
