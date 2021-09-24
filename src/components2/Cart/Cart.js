import React from 'react';

const Cart = (props) => {
    let items = 0;
    let shipping = 0;
    let totalQuantity = 0;
    for (const product of props.cart) {
        if (!product.quantity) {
            product.quantity = 1
        }
        else {
            totalQuantity = totalQuantity + product.quantity;
        }
        items = items + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    let totalBeforeTax = items + shipping;
    let tax = totalBeforeTax * 0.05;
    const OrderTotal = totalBeforeTax + tax
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Order Summary</h3>
            <p style={{ textAlign: 'center' }}>Items Ordered: {totalQuantity}</p>
            <p><strong>items:</strong> ${items.toFixed(2)}</p>
            <p><strong>Shipping & Handling:</strong> ${shipping.toFixed(2)}</p>
            <p><strong>Total before tax:</strong> ${totalBeforeTax.toFixed(2)}</p>
            <p><strong>Tax:</strong> ${tax.toFixed(2)}</p>
            <p><strong>Order Total:</strong> ${OrderTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;