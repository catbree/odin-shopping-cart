import { useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import "./productPage.css";

import Title from "../components/Title";

export default function ProductPage() {
  const [cartItems, setCartItems] = useOutletContext();
  const [quantity, setQuantity] = useState(1);

  function addToCart(id, title, price, image, qty) {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].qty += +qty;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { id, title, price, image, qty }]);
    }
  }

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((result) => setProduct(result))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error has occured.</p>;

  return (
    <div className="product-container">
      <div className="individual-product-image-container">
        <img className="individual-product-image" src={product.image} alt="" />
      </div>
      <div className="product-content">
        <Title>{product.title}</Title>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <input
          className="quantity-input"
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          className="secondary-button"
          onClick={() =>
            addToCart(
              product.id,
              product.title,
              product.price,
              product.image,
              quantity
            )
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
