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
          {cartItems.map((item) => (
            <tr key={item.id} className="cart-item">
              <td className="cart-item-details">
                <div className="item-image-container">
                  <img src={item.image} alt=""></img>
                </div>
                <div className="item-details">
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                </div>
              </td>
              <td>#</td>
              <td className="align-right">$###</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
