import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function ProductCard(props) {
    const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.price / 100)

    return (
        <Card>
            <Card.Img variant="top" src={props.thumbnail} alt={props.title} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text className='text-success fw-bold'>
                    {formattedPrice}
                </Card.Text>
                <Link to={`/products/${props.productId}`}>View Details</Link>
            </Card.Body>
        </Card>
    )
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productId: PropTypes.string.isRequired
};