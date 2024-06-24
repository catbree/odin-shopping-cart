import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Root from "./pages/Root";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

import ErrorPage from "./ErrorPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Navigate to="/shop" />,
        },
        {
          path: "/shop",
          element: <ShopPage />,
        },
        {
          path: "/products/:id",
          element: <ProductPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
