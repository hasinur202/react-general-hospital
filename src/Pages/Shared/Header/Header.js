import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="warning" variant="dark" sticky="top" collapseOnSelect expand="lg" className="py-2">
                {/* <div id="topbar" className="d-flex align-items-center fixed-top"> */}
                    <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
                        <div className="align-items-center d-none d-md-flex">
                            <i className="bi bi-clock"></i> Monday - Saturday, 8AM to 10PM
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="bi bi-phone"></i> Call us now +88 01755 XXXX XX
                        </div>
                    </div>
                {/* </div> */}
            </Navbar>
            <Navbar bg="light" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <h1 className="logo"><a style={{fontSize: '22px'}} href="#home">ANI General Hospital</a></h1>
                    {/* <Navbar.Brand href="#home">Anika General Hospital</Navbar.Brand> */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                        <Nav.Link as={HashLink} to="/gallery">Gallery</Nav.Link>
                        <Nav.Link as={HashLink} to="/appointment"><span className="btn btn-info btn-sm d-none d-md-inline">Make an <b>Appointment</b></span></Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        { user.displayName && 
                            <span className="mt-4"> Logged In as: <a href="#login"> {user?.displayName}</a></span>
                        }
                        {/* <Navbar.Text> */}
                        {/* </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;