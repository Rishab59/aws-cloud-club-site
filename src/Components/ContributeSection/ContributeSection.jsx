import React from 'react' ;
import { Col, Container, Row, Button } from 'react-bootstrap';
import SectionHeader from '../SectionHeader/SectionHeader';

import "./ContributeSection.css"

function ContributeSection() {
    return (
        <Container className='contribute-section'>
            <SectionHeader header="Contribute" />
            <Row className='contribute-card'>
                <Col lg={8}>
                    <h1>Host an Event</h1>
                    <p className='para'>
                        Ready to host your next event? Become a part of our vibrant community and bring your ideas to life! Join us as a host and let's create memorable experiences together.
                    </p>
                </Col>
                
                <Col lg={4} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Button className='contribute-btn'>
                        Grab Opportunity &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </Button>
                </Col>
            </Row>

            <Row className='contribute-card' style={{marginTop: "20px"}}>
                <Col lg={8}>
                    <h1>Present a Topic</h1>
                    <p className='para'>
                    Share your expertise with our community! Step up to the stage and present a topic you're passionate about. Your insights could inspire and educate others. Join us as a speaker and let your voice be heard!
                    </p>
                </Col>
                
                <Col lg={4} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Button className='contribute-btn'>
                        Grab Opportunity &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </Button>
                </Col>
            </Row>
            
        </Container>
    ) ;
}

export default ContributeSection ;
