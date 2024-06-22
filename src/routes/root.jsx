import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export default function Root() {
  const [cartItems, setCartItems] = useState([]);
  const cartItemsTotalQty = cartItems.length;
  return (
    <div>
      <div id="navbar">
        <ul>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="cart">Cart: {cartItemsTotalQty}</Link>
          </li>
        </ul>
      </div>
      <div id="page-content">
        <Outlet context={[cartItems, setCartItems]} />
      </div>
    </div>
  );
}
