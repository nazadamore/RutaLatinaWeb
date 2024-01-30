import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Nav1() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <div className="d-flex justif   y-content-between align-items-center w-100">
                    <Navbar.Brand href="#">Ruta Latina</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link to="" className="nav-link active" aria-current="page">INICIO</Nav.Link>
                        <Nav.Link href="" className="nav-link">NOSOTROS</Nav.Link>
                        <Nav.Link href="" className="nav-link">GALERIA</Nav.Link>
                        <Nav.Link href="" className="nav-link">ABASTECIMIENTO</Nav.Link>
                        <Nav.Link href="" className="nav-link link-success" style={{ whiteSpace: 'nowrap' }}>¿CÓMO COLABORAR?</Nav.Link>
                        <Nav.Link href="" className="nav-link">CONTACTO</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
