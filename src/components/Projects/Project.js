import React from 'react';
import { Carousel } from 'react-bootstrap';

export const Project = ({title, description, url, thumbnail, altTag}) => {
   return(
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={thumbnail}
        alt={altTag}
        />
        <Carousel.Caption>
            <h3>{title}</h3>
            <p>{description}</p>
        </Carousel.Caption>
    </Carousel.Item>
   );
}

