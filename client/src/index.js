import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterPage from "./components/auth/RegisterPage";
import LoginPage from "./components/auth/LoginPage";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store";
import AlertNotification from "./shared/components/AlertNotification";
import HomePage from "./components/home/HomePage";
import Cart from "./components/cart/Cart";
import Wallet from "./components/wallet/Wallet";
import SellerHomePage from "./components/seller/homeSeller/SellerHomePage";
import SellerRegisterPage from "./components/seller/auth/SellerRegisterPage";
import SellerLoginPage from "./components/seller/auth/SellerLoginPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/wallet",
    element: <Wallet />,
  },
  {
    path: "/seller/home",
    element: <SellerHomePage />,
  },
  {
    path: "/seller/register",
    element: <SellerRegisterPage />,
  },
  {
    path: "/seller/login",
    element: <SellerLoginPage />,
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    <AlertNotification />
  </Provider>
);
