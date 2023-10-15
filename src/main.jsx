import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import { SHOPCONTEXTPROVIDER } from "./Contexts/ShopContext.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Cart from "./components/Cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SHOPCONTEXTPROVIDER>
        <Routes>
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </SHOPCONTEXTPROVIDER>
    </BrowserRouter>
  </React.StrictMode>
);
