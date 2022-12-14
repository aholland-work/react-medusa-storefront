import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';

export default function NavHeader() {
    const cartCount = localStorage.getItem('cartCount') ?? 0

    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Nav className="w-25 d-flex align-items-center justify-content-between">
                    <img
                        alt="Medusa logo"
                        src="https://raw.githubusercontent.com/aholland-work/react-medusa-storefront/main/src/assets/logo-dark.svg"
                        width="150"
                    />

                    <Navbar.Text className="text-light fw-bold">
                        <Link className="text-decoration-none" to="/"> 🛍️ Products</Link>
                    </Navbar.Text>
                </Nav>
                <Nav>
                    <Navbar.Text className="text-light fw-bold">
                        Cart
                        <Badge bg="success" className="ms-2">{cartCount}</Badge>
                        <span className="visually-hidden">{cartCount} items in the cart</span>
                    </Navbar.Text>
                </Nav>
            </Container>
        </Navbar>
    )
}
