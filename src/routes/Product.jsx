import React from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Product() {
    // Get the product ID param from the URL.
    let { id } = useParams();
    return (
        <>
            <main className="mt-5">
                <Container>
                    <Row>
                        <Col><img width="500px" alt="Medusa sweatshirt" src="https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png" /></Col>
                        <Col>
                            <h1>Medusa sweatshirt</h1>
                            <p className="mb-4 text-success fw-bold">$33.50</p>
                            <p className="mb-5">Product description goes here</p>
                            <Button variant="success" size="lg" onClick={() => { console.log("Add to cart") }}>Add to cart</Button>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}
