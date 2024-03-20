import React from 'react'
import "./Benefits.css"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import SectionHeader from '../SectionHeader/SectionHeader'
import BlurCard from '../BlurCard/BlurCard'



function Benefits() {
  return (
    <Container id='Activities' fluid className='benefits-section'>
        
      <SectionHeader header = "Benefits"/>
      <Row>

        <Col lg={6} className="benefits">  
        <h1>01. Training Sessions</h1>
        <p className='para'>Regular workshops, led by experienced members, industry professionals, and certified AWS trainers, provide valuable insights and practical guidance on various AWS services and technologies, enhancing participants' proficiency in cloud computing across all levels.</p>
          {/* <BlurCard title="Training Sessions" text="Regular workshops, led by experienced members, industry professionals, and certified AWS trainers, provide valuable insights and practical guidance on various AWS services and technologies, enhancing participants' proficiency in cloud computing across all levels." /> */}
        </Col>

        {/* <Col lg={6}  className="benefits">
        <h1>Hands-On Projects</h1>
          <BlurCard title="Hands-On Projects" text="Hands-on projects enable members to apply theory practically, fostering deeper understanding and enhancing problem-solving skills in cloud computing. This hands-on experience also cultivates collaboration and innovation, making members more competitive in the job market." />
        </Col> */}
{/*         
        <Col md={4} className="benefits">
          <BlurCard title="Industry Mentoring" text="Industry talks and mentorship offer members invaluable insights, guidance, and networking opportunities, empowering them to stay updated on trends, gain real-world perspectives, and receive personalized support for professional growth in cloud computing." />
        </Col> */}

      </Row>

      <Row>
        <Col></Col>
        <Col lg={6} className="benefits">  
        <h1>01. Training Sessions</h1>
        <p className='para'>Regular workshops, led by experienced members, industry professionals, and certified AWS trainers, provide valuable insights and practical guidance on various AWS services and technologies, enhancing participants' proficiency in cloud computing across all levels.</p>
          {/* <BlurCard title="Training Sessions" text="Regular workshops, led by experienced members, industry professionals, and certified AWS trainers, provide valuable insights and practical guidance on various AWS services and technologies, enhancing participants' proficiency in cloud computing across all levels." /> */}
        </Col>
      </Row>

      {/* <Row className="second-row">

        <Col md={6} className="benefits">
          <BlurCard title="AWS Certifications" text="The club supports AWS certification prep with practice sessions, study materials, and exams. Members can also access discounted exam vouchers through partnerships, ensuring readiness to showcase expertise and advance in the tech industry." />
        </Col>

        <Col md={6} className="benefits">
          <BlurCard title="Networking & Collaboration" text="The club provides networking opportunities for members to collaborate with global clubs, connect with industry mentors, and engage with professionals. By leveraging these connections, members gain insights, expand their network, and access resources to enhance their skills and career prospects." />
        </Col>
        
      </Row> */}
    </Container>
  );
}

export default Benefits;
