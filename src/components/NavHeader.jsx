import React from 'react'
import logo from '../assets/logo-dark.svg'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';

export default function NavHeader() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Nav className="w-25 d-flex align-items-center justify-content-between">
                    <img
                        alt="Medusa logo"
                        src={logo}
                        width="150"
                    />

                    <Navbar.Text className="text-light fw-bold">
                        {/**TODO: Wrap text in a React Router <Link /> tag */}
                        🛍️ Products
                    </Navbar.Text>
                </Nav>
                <Nav>
                    <Navbar.Text className="text-light fw-bold">
                        {/**TODO: Wrap text in a React Router <Link /> tag */}
                        Cart
                        <Badge bg="success" className="rounded-circle ms-2">9</Badge>
                        <span className="visually-hidden">number of items in the cart</span>
                    </Navbar.Text>
                </Nav>
            </Container>
        </Navbar>
    )
}
