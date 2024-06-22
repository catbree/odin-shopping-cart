import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <div id="navbar">
        <ul>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </div>
      <div id="page-content">
        <Outlet />
      </div>
    </div>
  );
}
