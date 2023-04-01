import React from 'react';
import { Navbar, FormControl, Container, Form, Button, Nav } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/" className="d-inline-block align-top">React Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                    <Navbar className="text-white justify-content-center gap-4 mx-auto">
                        <Nav.Link href="/"> Home </Nav.Link>
                        <Nav.Link href="/about"> About us </Nav.Link>
                        <Nav.Link href="/contacts"> Contacts </Nav.Link>
                        <Nav.Link href="/blog"> Blog </Nav.Link>
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
            </Container>
        </Navbar>
    );
};

export default NavBar;