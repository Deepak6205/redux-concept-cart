import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import "./Cart.css";
import { useSelector } from 'react-redux';
const Cart = () => {
    const selector = useSelector((state)=>state.cart.value);
  return (
    <div className="cart">
        <FaShoppingCart />

        <span className="cart-count">
          {selector}
        </span>
      </div>
  )
}

export default Cart