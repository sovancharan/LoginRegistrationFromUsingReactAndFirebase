import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import NavDropdown from "react-bootstrap/NavDropdown";


const Header = (props) => {
    //  console.log('props', props.headerData.NavbarHeader);
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand
                        className="text-danger font-italic ps-5 fs-2"
                        href="#home"
                    >
                        {props.headerData.NavbarHeader}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end"
                    >
                        <Nav className="">
                            <div className="d-flex pt-2">
                                <img
                                    className="nav-img"
                                    src="static/img/list.png"
                                    alt=""
                                />
                                <Nav.Link
                                    href="#home"
                                    className="fs-5 fw-bolder"
                                >
                                    {props.headerData.List}
                                </Nav.Link>
                            </div>
                            <div className="d-flex pt-2">
                                <img
                                    className="position-relative dot-img"
                                    src="static/img/Ellipse 1.png"
                                    alt=""
                                />
                                <img
                                    className="nav-img"
                                    src="static/img/busket.png"
                                    alt=""
                                />
                                <Nav.Link
                                    href="#link"
                                    className="fs-5 fw-bolder"
                                >
                                    {props.headerData.Busket}
                                </Nav.Link>
                            </div>
                            <Nav.Link
                                href="/login"
                                className="fs-5 text-success fw-bolder pt-3"
                            >
                                {props.headerData.Login}
                            </Nav.Link>
                            <Nav.Link href='/contactUs' className='mt-2 fw-bold'>
                              Contact Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Header;
