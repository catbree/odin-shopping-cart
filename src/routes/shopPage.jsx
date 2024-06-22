import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <div>Hello World Title!</div>
      <div id="product-grid">
        {shopProducts.map((product) => (
          <li key={product.id}><Link to={`/products/${product.id}`}>{product.title}</Link></li>
        ))}
      </div>
    </div>
  );
}
