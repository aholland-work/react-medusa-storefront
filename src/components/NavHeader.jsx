import React from 'react'
import logo from '../assets/logo.svg'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function NavHeader() {
    return (
        <Navbar bg="light" variant="light">
            <Container fluid>
                <img
                    alt="Medusa logo"
                    src={logo}
                    width="150"
                />
                <Navbar.Text className="text-dark">
                    {/**TODO: Wrap text in a React Router <Link /> tag */}
                    🛍️ Products
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}
