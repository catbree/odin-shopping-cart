import { useOutletContext } from "react-router-dom";
import "./cartPage.css";

export default function CartPage() {
  const [cartItems, setCartItems] = useOutletContext();
  console.log(cartItems);
  return (
    <div>
      <h1>Your cart</h1>
      <table className="cart-items">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="cart-item">
            <td className="cart-item-details">
              <div className="item-image-container">
                <img
                  src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                  alt=""
                />
              </div>
              <div className="item-details">
                <p>John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet</p>
                <p>$695.00</p>
              </div>
            </td>
            <td>1</td>
            <td>$695.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
