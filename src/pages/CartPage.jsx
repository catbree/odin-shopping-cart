import { useOutletContext } from "react-router-dom";
import "./cartPage.css";
import Title from "../components/Title";

export default function CartPage() {
  const [cartItems, setCartItems] = useOutletContext();

  const estimatedTotal = cartItems
    .map((item) => item.qty * item.price)
    .reduce((partialSum, a) => partialSum + a, 0);

  function handleUpdateQty(id, qty) {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    const newCartItems = [...cartItems];
    newCartItems[itemIndex].qty = +qty;
    setCartItems(newCartItems);
  }

  function deleteCartItem(id) {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    const newCartItems = [...cartItems];
    newCartItems.splice(itemIndex, 1);
    setCartItems(newCartItems);
  }

  return (
    <div>
      <Title>Your cart</Title>
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
              <td>
                <input
                  className="quantity-input"
                  type="number"
                  value={item.qty}
                  min="1"
                  onChange={(e) => handleUpdateQty(item.id, e.target.value)}
                />
                <button onClick={() => deleteCartItem(item.id)}>Remove</button>
              </td>
              <td className="align-right">
                ${(item.qty * item.price).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={()=>setCartItems([])}>Clear cart</button>
        <p>Estimated total: ${estimatedTotal}</p>
        <p>Taxes, discounts, and shipping calculated at checkout</p>
        <button className="primary-button">Check out</button>
      </div>
    </div>
  );
}
