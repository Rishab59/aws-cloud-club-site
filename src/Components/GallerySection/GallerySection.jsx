import React from 'react';
import {Container, Row } from 'react-bootstrap';
import ImageGallery from "react-image-gallery";

import "./GallerySection.css"
import SectionHeader from '../SectionHeader/SectionHeader';

import inauguration1 from '../../assets/img/events/inauguration1.jpg'
import inauguration2 from '../../assets/img/events/inauguration2.jpg'
import inauguration3 from '../../assets/img/events/inauguration4.jpg'


function GallerySection() {
  const images = [
    {
      original: inauguration1,
      thumbnail: inauguration1,
    },
    {
      original: inauguration2,
      thumbnail: inauguration2,
    },
    {
      original: inauguration3,
      thumbnail: inauguration3,
    },
    
  ];

  return (
    <Container className='gallery-section'>
        <SectionHeader header="Moments" />
        <Row className='row-gallery'>
            <ImageGallery 
            items={images} 
            showNav={false} 
            thumbnailPosition={"right"} 
            showIndex={true}
            autoPlay={true}
            showPlayButton={false}
            showFullscreenButton={false}/>

        </Row>
    </Container>
  );
}

export default GallerySection;
