import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductPage() {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`, {mode: "cors"})
            .then((response) => {
                if(response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((result)=> setProduct(result))
            .catch((error)=>setError(error))
            .finally(()=>setLoading(false));
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error has occured.</p>;
    
  return (
    <div>
      <p>Hello World!</p>
      <p>We need this to turn into a custom title: {product.title} </p>
    </div>
  );
}
