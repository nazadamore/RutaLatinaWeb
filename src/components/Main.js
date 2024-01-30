import React from 'react';
import { Card, Button, Carousel } from 'react-bootstrap';

const Main = () => {
    return (
        <header className="position-relative d-flex justify-content-start align-items-center">
            <div id="homeCard" className="card text-start z-3 position-absolute text-white bg-transparent w-50">
                <Card.Body className="bg-transparent">
                    <Card.Title className="text-white">RUTA LATINA</Card.Title>
                </Card.Body>
            </div>
            <div id="carouselFade" className="carousel slide carousel-fade">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselFade" data-bs-slide-to="0" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselFade" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
                </div>
                <Carousel fade>
                    <Carousel.Item>
                        <div className="overlay z-2"></div>
                        <img src="https://trabajointegradorcursophp.000webhostapp.com/assets/images/ba1.jpg" className="d-block w-100" alt="carouselImage1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="overlay z-2"></div>
                        <img src="https://trabajointegradorcursophp.000webhostapp.com/assets/images/ba2.jpg" className="d-block w-100" alt="carouselImage2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="overlay z-2"></div>
                        <img src="https://trabajointegradorcursophp.000webhostapp.com/assets/images/ba3.jpg" className="d-block w-100" alt="carouselImage3" />
                    </Carousel.Item>
                </Carousel>
                <button className="carousel-control-prev z-3" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next z-3" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </header>
    );
};

export default Main;