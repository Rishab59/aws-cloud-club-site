import React from 'react';
import { Card } from 'react-bootstrap';

import "./ImgCard.css"

function BlurCard(props) {
  return (
    <Card className="img-card">
      <Card.Body className='img-card-body'>
        <img src={props.image} alt={props.title} className="card-image img-fluid" />
      </Card.Body>
    </Card>
  );
}

export default BlurCard;
