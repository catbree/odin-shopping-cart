import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar( {cartItemsTotalQty} ) {
    return (
        <div id="navbar">
        <ul>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="/">
                <div className="store-logo">
                    <img src="src/assets/images/storeIcon.png" />
                    <span>Fake Shop</span>
                </div>
            </Link>
        </li>
          <li>
            <Link to="cart">Cart: {cartItemsTotalQty}</Link>
          </li>
        </ul>
      </div>
    )
}

Navbar.propTypes = {
    cartItemsTotalQty: PropTypes.number
};