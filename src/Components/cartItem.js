import React, { useState } from "react";
import "./cartItem.css";

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from '../redux/Shopping/shopping-actions'


const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    console.log(e.target.value)
    adjustQty(item.id, e.target.value);

  };

  return (
    <div className="cartItem">
      <img
        className="cartItem__image"
        src={item.source}
        alt={item.name}
      />
      <div className="cartItem__details">
        <p className="details__title">{item.name}</p>
        {/* <p className="details__desc">{item.description}</p> */}  
        <p className="details__price">$ {item.price}</p>
      </div>
      <div className="cartItem__actions">
        <div className="cartItem__qty">
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="actions__deleteItemBtn"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);