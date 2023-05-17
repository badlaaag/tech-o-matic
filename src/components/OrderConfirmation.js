import React from "react";
import { useSelector } from "react-redux";

const OrderConfirmation = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Order Confirmation</h2>
      <ul>
        {cartItems.map((cartItem, key) => (
          <li key={key}>
            {cartItem.name} x {cartItem.quantity}
          </li>
        ))}
      </ul>
      {/* Add more order details as needed */}
    </div>
  );
};

export default OrderConfirmation;
