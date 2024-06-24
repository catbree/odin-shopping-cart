import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";

export default function Root() {
  const [cartItems, setCartItems] = useState([]);
  const cartItemsTotalQty = cartItems.length;

  useEffect(() => {
    const localStorageCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (localStorageCartItems && localStorageCartItems.length > 0) {
      setCartItems(localStorageCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <Navbar cartItemsTotalQty={cartItemsTotalQty} />
      <div className="page-content">
        <Outlet context={[cartItems, setCartItems]} />
      </div>
    </div>
  );
}
