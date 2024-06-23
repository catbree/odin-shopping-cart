import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Root() {
  const [cartItems, setCartItems] = useState([]);
  const cartItemsTotalQty = cartItems.length;

  useEffect(() => {
    const localStorageCartItems = JSON.parse(localStorage.getItem("cartItems"));
    console.log(localStorageCartItems)
    if (localStorageCartItems && localStorageCartItems.length > 0) {
      setCartItems(localStorageCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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
