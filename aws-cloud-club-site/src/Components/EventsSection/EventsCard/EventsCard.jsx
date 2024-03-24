import React from 'react'
import {Card, Col, Container, Row} from 'react-bootstrap'

import "./EventsCard.css"

function EventsCard(props) {
  return (
    <Card className="events-card">
            <Card.Img src= {props.image}></Card.Img>
    </Card>
  )
}

export default EventsCard
