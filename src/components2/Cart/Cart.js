import React from 'react';

const Cart = (props) => {
    let items = 0;
    let shipping = 0;
    for (let product of props.cart) {
        items = items + product.price;
        shipping = shipping + product.shipping;
    }
    let totalBeforeTax = items + shipping;
    let tax = totalBeforeTax * 0.05;
    const OrderTotal = items + shipping + tax
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Order Summary</h3>
            <p style={{ textAlign: 'center' }}>Items Ordered: {props.cart.length}</p>
            <p><strong>items:</strong> ${items.toFixed(2)}</p>
            <p><strong>Shipping & Handling:</strong> ${shipping.toFixed(2)}</p>
            <p><strong>Total before tax:</strong> ${totalBeforeTax.toFixed(2)}</p>
            <p><strong>Tax:</strong> ${tax.toFixed(2)}</p>
            <p><strong>Order Total:</strong> ${OrderTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;