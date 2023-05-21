import React, { useState } from 'react';
import { Navbar, FormControl, Container, Form, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/index.js";
import { useTranslation } from "react-i18next";

const NavBar = () => {
    const [show, setShow] = useState(false);
    const { t, i18n } = useTranslation()
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    return (
        <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/" className="d-inline-block align-top">{t("react-site")}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                    <Navbar className="text-white justify-content-center gap-4 mx-auto">
                        <Link className="text-white text-decoration-none" to="/">{t("home")}</Link>
                        <Link className="text-white text-decoration-none" to="/about">{t("about")}</Link>
                        <Link className="text-white text-decoration-none" to="/contacts">{t("contacts")}</Link>
                        <Link className="text-white text-decoration-none" to="/blog">{t("blog")}</Link>
                    </Navbar>
                    <Form className="d-flex">
                        <FormControl
                            type="text"
                            placeholder={t("search")}
                            className="me-sm-3"
                        />
                        <Button variant="outline-info">{t("search")}</Button>
                    </Form>
                </Navbar.Collapse>
                <Button className="ms-2" onClick={handleShow}>{t("login")}</Button>
                <LoginForm show={show} handleClose={handleClose} />
                <select className='ms-2' onChange={changeLanguage}>
                    <option value="ua">UA</option>
                    <option value="en">EN</option>
                </select>
            </Container>
        </Navbar>
    );
};

export default NavBar;