import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { img, id, price, ratings, seller, name, shipping, stock } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <small>Stock: {stock}</small>
                <small>Manufacturer: {seller}</small>
                <small>Ratings: {ratings} star</small>
            </div>
            <button onClick={() => handleAddToCart(product)}>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;