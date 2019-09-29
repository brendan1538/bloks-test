import React from 'react';
import { Carousel } from 'react-bootstrap';

import dadsajokeThumb from '../../resources/project-thumbnails/dadsajoke-thumbnail.png';
import snakejsThumb from '../../resources/project-thumbnails/snakejs-thumbnail.png';

export default class ProjectCollection extends React.Component {

    render() {
        return(
            <section className="projects-page">
                <div className="project-collection" id="project-collection">
                    <Carousel>
                        <Carousel.Item>
                            <a href="https://github.com/brendan1538/DadsAJoke"  target="_blank" rel="noopener noreferrer"><img
                            className="d-block w-100"
                            src={dadsajokeThumb}
                            alt="DadsAJoke"
                            /></a>
                            <Carousel.Caption>
                                <h3>DadsAJoke</h3>
                                <p>This project was a great way to learn Redux and integrate it into a React application.</p>
                            </Carousel.Caption>
                            {/* <span aria-hidden="true" className="carousel-control-next-icon" />
                            <span aria-hidden="true" className="carousel-control-prev-icon" /> */}
                        </Carousel.Item>

                        <Carousel.Item>
                        <a href="https://github.com/brendan1538/SnakeJS" target="_blank" rel="noopener noreferrer"><img
                            className="d-block w-100"
                            src={snakejsThumb}
                            alt="SnakeJS"
                            /></a>
                            <Carousel.Caption>
                                <h3>SnakeJS</h3>
                                <p>A recreation of the classic Snake game with JavaScript and HTML5 Canvas.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        );
    }
}