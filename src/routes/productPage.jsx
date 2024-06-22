import { useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import "./productPage.css";

export default function ProductPage() {
  const [cartItems, setCartItems] = useOutletContext();
  function addToCart(newId) {
    setCartItems([...cartItems, { id: newId, qty: 1 }]);
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
      <img src={product.image} alt="" />
      <div className="product-content">
        <h1>{product.title}</h1>
        <p>${product.price} SGD</p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
      </div>
    </div>
  );
}
