import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { medusaClient } from '../utils/client.js'

const US_REGION_ID = "reg_01GJ487XFZNFZ26WH1AJ314JWZ"

const getFormattedPrice = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount / 100);
}

const addProduct = async (cartId, product) => {
    const { cart } = await medusaClient.carts.lineItems.create(cartId, {
        variant_id: product.variants[0].id, //For simplicities sake only adding the first variant
        quantity: 1
    })
    localStorage.setItem('cartCount', cart.items.length)
    window.location.reload()
}

export default function Product() {
    // Get the product ID param from the URL.
    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        const getIndividualProduct = async () => {
            const results = await medusaClient.products.retrieve(id);
            setProduct(results.product)
        }

        getIndividualProduct()
    }, []);

    const handleAddToCart = async () => {
        const cartId = localStorage.getItem('cartId');

        if (cartId) {
            //A cart was previously created so use the cartId found in localStorage
            addProduct(cartId, product)
        } else {
            //Create a cart if there isn't a pre-existing one
            const { cart } = await medusaClient.carts.create({ region_id: US_REGION_ID })
            localStorage.setItem('cartId', cart.id);

            //Use the newly generated cart's ID
            addProduct(cart.id, product)
        }
    }

    return (
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
                        <Button variant="success" size="lg" onClick={handleAddToCart}>Add to Cart</Button>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}
