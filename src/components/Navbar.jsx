import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import storeIcon from "../assets/images/storeIcon.png"

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
                    <img src={storeIcon} alt="" />
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