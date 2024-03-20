import React from 'react';
import { Card } from 'react-bootstrap';

import "./BlurCard.css"

function BlurCard(props) {
  return (
    <Card className="blur-card">
      <Card.Body>
        <h1 className='card-titile'>{props.title}</h1>
        <Card.Text className='card-text'>
        {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BlurCard;
