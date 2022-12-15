import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCard from '../components/ProductCard'
import { medusaClient } from '../utils/client.js'


export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const results = await medusaClient.products.list();
            setProducts(results.products)
        }

        getProducts()
    }, []);

    return (
        <>
            <header>
                <h1 className="my-4">All Products</h1>
            </header>
            <main>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {products.map((product) => (
                        <Col key={product.id}>
                            <ProductCard
                                title={product.title}
                                productId={product.id}
                                price={product.variants[0].prices[1].amount}
                                thumbnail={product.thumbnail} />
                        </Col>
                    ))}
                </Row>
            </main>
        </>
    )
}
