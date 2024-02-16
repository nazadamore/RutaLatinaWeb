import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Sponsors() {
    return (
        <div id="sponsors">
            <h2 className="otros_titulos izquierda">NOS ACOMPAÑAN</h2>
            <div className="sponsors_contenedor">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-50 fotos"
                            src="/imagenes/Diseño sin título.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50 fotos"
                            src="/imagenes/imagenesPrueba.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50 fotos"
                            src="/imagenes/imagenesPrueba2.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
