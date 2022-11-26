import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCard from '../components/ProductCard'

export default function Home() {
    return (
        <>
            <header>
                <h1 className="my-4">All Products</h1>
            </header>
            <main>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col key={idx}>
                            <ProductCard title="Medusa sweatshirt" productId="123abcd" price={1950} thumbnail="https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png" />
                        </Col>
                    ))}
                </Row>
            </main>
        </>
    )
}
