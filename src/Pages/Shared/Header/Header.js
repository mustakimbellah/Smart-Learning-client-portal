import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import photo from '../../../Photo/photo.jpg';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <img
                    alt="logo"
                    src={photo}
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                />
                <Navbar.Brand href="#home">Smart Learning</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>

                    </Nav>
                    <Nav>
                        <NavDropdown title="Toggle Theme" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Dark</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Light</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;