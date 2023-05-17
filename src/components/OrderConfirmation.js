import React from "react";
import { useSelector } from "react-redux";

const OrderConfirmation = () => {
  const { billingDetails, cartItems, cartTotalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <div>
      <h3>Billing Details</h3>
      <p>First Name: {billingDetails.firstName}</p>
      <p>Last Name: {billingDetails.lastName}</p>
      {/* Add the rest of the billing details fields here */}
      <h3>Your Order</h3>
      <ul>
        {cartItems.map((cartItem, key) => (
          <li key={key}>
            <span>
              {cartItem.name} X {cartItem.quantity}
            </span>{" "}
            <span>{cartItem.price}</span>
          </li>
        ))}
      </ul>
      <p>Total: {cartTotalPrice}</p>
    </div>
  );
};

export default OrderConfirmation;
