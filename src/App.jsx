import { useState } from 'react'
import './App.css'
import NavHeader from './components/NavHeader'
import ProductCard from './components/ProductCard'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
      <NavHeader />
      <main>
        <h1>All Products</h1>

        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <ProductCard title="Medusa sweatshirt" productId="123abcd" price={1950} thumbnail="https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png" />
            </Col>
          ))}
        </Row>
      </main>
    </div>
  )
}

export default App
