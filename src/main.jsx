import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./errorPage";
import ShopPage from "./routes/shopPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/products",
        element: <div>Products!</div>,
      },
      {
        path: "/cart",
        element: <div>Cart!</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
