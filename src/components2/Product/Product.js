import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating'
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, stock,star } = props.product
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                />
                <br />
                <button onClick={() => props.handleAddToCart(props.product)} className="addToCartBtn"><FontAwesomeIcon icon={faCartArrowDown} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;