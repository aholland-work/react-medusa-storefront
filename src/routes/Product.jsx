import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Medusa from "@medusajs/medusa-js"

const getFormattedPrice = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount / 100);
}

export default function Product() {
    const [product, setProduct] = useState({})

    // Get the product ID param from the URL.
    const { id } = useParams();

    useEffect(() => {
        const medusa = new Medusa()
        const getIndividualProduct = async () => {
            const results = await medusa.products.retrieve(id);
            setProduct(results.product)
        }

        getIndividualProduct()
    }, []);

    return (
        <>
            <main className="mt-5">
                <Container>
                    <Row>
                        <Col>
                            <img width="500px"
                                alt={product.title}
                                src={product.thumbnail} />
                        </Col>
                        <Col className="d-flex justify-content-center flex-column">
                            <h1>{product.title}</h1>
                            <p className="mb-4 text-success fw-bold">{getFormattedPrice(product.variants?.[0]?.prices?.[1]?.amount)}</p>
                            <p className="mb-5">{product.description}</p>
                            <Button variant="success" size="lg" onClick={() => { console.log("Add to cart") }}>Add to cart</Button>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}
