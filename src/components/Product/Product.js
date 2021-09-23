import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {


    // console.log(props)
    const { name, img, seller, price, stock } = props.product
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-margin">
                <h2 className="product-name">{name}</h2>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className="purchase-btn"><FontAwesomeIcon icon={faCartArrowDown} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;