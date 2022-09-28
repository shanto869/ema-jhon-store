import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (let product of cart) {
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
    }
    let tax = (totalPrice * 0.1).toFixed(2);
    let grandTotal = totalPrice + totalShipping + parseFloat(tax);

    return (
        <div className='cart-info'>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${(grandTotal).toFixed(2)}</p>

        </div>
    );
};

export default Cart;