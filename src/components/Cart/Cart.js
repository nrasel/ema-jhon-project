import React from 'react';

const Cart = (props) => {
    console.log(props.cart)
    let total = 0;
    let shipping = 0;
    for (let product of props.cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;

    }
    const beforeTax = total + shipping;
    const tax = (total + shipping) * 0.05;
    const orderTotal = total + shipping + tax;
    
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Order Summary</h2>
            <h4 style={{ textAlign: 'center' }}>Item Orderd: {props.cart.length}</h4>
            <p><strong>Items:</strong> ${total.toFixed(2)}</p>
            <p><strong>Shipping and Handling:</strong> ${shipping.toFixed(2)}</p>
            <p><strong>Total before tax:</strong>${beforeTax.toFixed(2)}</p>
            <p><strong>Estimated Tax:</strong> ${tax.toFixed(2)}</p>
            <p><strong>Order Total:</strong> ${orderTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;