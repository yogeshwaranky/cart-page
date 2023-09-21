// Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions/cartActions';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const increaseQuantity = (product) => {
    dispatch(addToCart(product));
  };

  const decreaseQuantity = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>{item.title}</div>
            <div>Price: ${item.price}</div>
            <div>Quantity: {item.quantity}</div>
            <button onClick={() => increaseQuantity(item)}>+</button>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
          </li>
        ))}
      </ul>
      <div>
        <p>Total Quantity: {calculateTotalQuantity()}</p>
        <p>Total Amount: ${calculateTotalAmount()}</p>
      </div>
    </div>
  );
};

export default Cart;
