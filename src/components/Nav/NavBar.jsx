import React, { useState } from 'react';
import { Navbar, FormControl, Container, Form, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/index.js";

const NavBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/" className="d-inline-block align-top">React Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                    <Navbar className="text-white justify-content-center gap-4 mx-auto">
                        <Link className="text-white text-decoration-none" to="/"> Home </Link>
                        <Link className="text-white text-decoration-none" to="/about"> About us </Link>
                        <Link className="text-white text-decoration-none" to="/contacts"> Contacts </Link>
                        <Link className="text-white text-decoration-none" to="/blog"> Blog </Link>
                    </Navbar>
                    <Form className="d-flex">
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="me-sm-3"
                        />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar.Collapse>
                <Button className="ms-2" onClick={handleShow}>Login</Button>
                <LoginForm show={show} handleClose={handleClose} />
            </Container>
        </Navbar>
    );
};

export default NavBar;