import React, { useState, useEffect } from "react";
import "./cart.css";

import { connect } from "react-redux";

import CartItem from "./cartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    let finalPrice = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price; //Fix here
      finalPrice = price.toFixed(2)
    });

    setTotalItems(items);
    setTotalPrice(finalPrice);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className='backgroud-cart'>
        <div className="cart">
            <div className="cart__items">
                {cart.map((item) => (
                <CartItem key={item.id} item={item} />
                ))}
            </div>
            <div className="cart__summary">
                <h4 className="summary__title">Cart Summary</h4>
                <div className="summary__price">
                <span>TOTAL: ({totalItems} items)</span>
                <span>$ {totalPrice}</span>
                </div>
                <button className="summary__checkoutBtn">
                Proceed To Checkout
                </button>
            </div>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);