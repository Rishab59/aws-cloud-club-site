import React from 'react';
import { Card } from 'react-bootstrap';

import "./BlurCard.css"

function BlurCard(props) {
  return (
    <Card className="blur-card">
      <Card.Body>
        <Card.Title className='card-titile'>{props.title}</Card.Title>
        <Card.Text className='card-text'>
        {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BlurCard;
