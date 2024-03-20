import "./Footer.css" ;

import React from "react" ;

import { NavLink } from "react-router-dom" ;

import AWSCloudClubLogo from "../../assets/img/logo.png" ;

import { Container, Row, Col } from "react-bootstrap";
import GradientBoxIcon from "../GradientBoxIcon/GradientBoxIcon";
import GradientProfileIcon from "../GradientProfileIcon/GradientProfileIcon";
import SocailLinks from "../SocialLinks/SocailLinks";

function Footer() {
    return (
        <Container className="footer">
            <Row>
                <Col lg={3}>
                    
                    <Row>
                        <Col md={6}>
                            <h5 className="side-head" style={{marginTop: "25px"}}>Our Team</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <NavLink to= "https://www.linkedin.com/in/madhavakumar-dhandapani/" target="_blank" className="useful-links">
                            <GradientProfileIcon />&nbsp;
                            Madhavakumar D
                            </NavLink>
                        </Col>
                        <Col md={6}>
                            <NavLink to= "https://www.linkedin.com/in/hrishab59/" target="_blank" className="useful-links">
                            <GradientProfileIcon />&nbsp;
                            Rishab H
                            </NavLink>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col md={6}>
                            <NavLink to= "https://www.linkedin.com/in/sakkthivelt/" target="_blank" className="useful-links">
                            <GradientProfileIcon />&nbsp;
                            Sakkthivel T
                            </NavLink>
                        </Col>
                        
                        <Col md={6}>
                            <NavLink to= "https://www.linkedin.com/in/porselvan-p-459596232/" target="_blank" className="useful-links">
                                <GradientProfileIcon />&nbsp;
                                Porselvan P
                            </NavLink>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <NavLink to= "https://www.linkedin.com/in/jeswinjosephj/" target="_blank" className="useful-links"> 
                            <GradientProfileIcon />&nbsp;
                            Jeswin Joseph J
                            </NavLink>
                        </Col>
                        
                    </Row>

                    <Row>
                        <Col md={6}>
                            <h5 className="side-head" style={{marginTop: "35px"}}>Contact Us</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <NavLink to= "https://explore.skillbuilder.aws/learn" target="_blank" className="useful-links" style={{fontFamily: "sans-serif"}}>
                                <GradientBoxIcon />&nbsp;
                                +91 93846 78960
                            </NavLink>
                        </Col>
                        
                    </Row>
                    
                    <Row>
                        <Col md={12}>
                            <NavLink to= "/" target="_blank" className="useful-links">
                                <GradientBoxIcon />&nbsp;
                                awscloudclubchennai@gmail.com
                            </NavLink>
                        </Col>
                    </Row>
                    <SocailLinks />

                </Col>
                <Col lg={5} className="img-container">
                    <img className="footer-logo" src={AWSCloudClubLogo} alt="AWSCloudClubLogo" />
                </Col>
                <Col lg={4}>
                    <p className="disclaimer">
                        <i>
                            This website is managed by <b>AWS Cloud Club - Panimalar Chennai</b> and is independent of any affiliation with Amazon Web Services, Inc.
                            <br />
                            <br />
                            Opinions expressed within the content are solely those of the respective contributors, and do not necessarily reflect the official positions or views of Amazon Web Services, Inc.
                        </i>
                    </p>
                    <Row>
                        <Col md={6}>
                            <h5 className="side-head" style={{marginTop: "15px"}}>Useful Links</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <NavLink to= "https://explore.skillbuilder.aws/learn" target="_blank" className="useful-links">
                            <GradientBoxIcon />&nbsp;
                            Skill Builder</NavLink>
                        </Col>
                        <Col md={6}>
                            <NavLink to= "/" target="_blank" className="useful-links">
                            <GradientBoxIcon />&nbsp;
                            Feedback
                            </NavLink>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col md={6}>
                            <NavLink to= "https://www.awsboy.com/aws-practice-exams/practitioner/" target="_blank" className="useful-links">
                            <GradientBoxIcon />&nbsp;
                            Practice Test
                            </NavLink>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    ) ;
}


export default Footer ;