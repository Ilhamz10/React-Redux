import React, { PureComponent } from "react";
import "../styles.css";


function CartItem({ title, price, Title }) {
  return (
    <div className="cart-item">
      <p>{Title}</p>
      {/* <p className="cart-item__title">{title}</p>
      <p className="cart-item__price">{price}.00$</p> */}
    </div>
  );
}


export default CartItem;