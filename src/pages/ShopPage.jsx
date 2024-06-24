import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ShopPage.css";
import Title from "../components/Title";

export default function ShopPage() {
  const [shopProducts, setShopProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((result) => setShopProducts(result))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error has occured.</p>;

  return (
    <div>
      <Title>Shop All</Title>
      <div className="product-grid">
        {shopProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div className="product-image-container">
                <img src={product.image} alt="" />
              </div>
              <div className="product-details">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-price">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
