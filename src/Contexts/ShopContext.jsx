import React, { Children, createContext, useState } from "react";
import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p3 from "../img/p3.png";
import p4 from "../img/p4.png";
import p5 from "../img/p5.png";
import p6 from "../img/p6.png";
import p7 from "../img/p7.png";
import p8 from "../img/p8.png";
import p9 from "../img/p9.png";
import p10 from "../img/p10.png";
import p11 from "../img/p11.png";
import p12 from "../img/p12.png";

export const ShopContext = createContext(null);

const Products = [
  {
    id: 1,
    name: "Nike Air Force 1",
    price: 130,
    img: p8,
  },
  {
    id: 2,
    name: "Nike Air Max",
    price: 430,
    img: p9,
  },
  {
    id: 3,
    name: "Nike Cosmic Unity 3",
    price: 788,
    img: p10,
  },
  {
    id: 4,
    name: "adidas Originals Rivalry 86 Low",
    price: 230,
    img: p11,
  },
  {
    id: 5,
    name: "Nike Ja Morant One",
    price: 500,
    img: p12,
  },
  {
    id: 6,
    name: "Adidas One",
    price: 933,
    img: p1,
  },
  {
    id: 7,
    name: "Nike Air Three",
    price: 230,
    img: p2,
  },
  {
    id: 8,
    name: "Nike Ja Morant Two",
    price: 560,
    img: p3,
  },
  {
    id: 9,
    name: "Nike White",
    price: 300,
    img: p4,
  },
  {
    id: 10,
    name: "Nike Yellow One",
    price: 520,
    img: p5,
  },
  {
    id: 11,
    name: "Nike White One",
    price: 820,
    img: p6,
  },
  {
    id: 12,
    name: "Air Jordan",
    price: 740,
    img: p7,
  },
];

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const SHOPCONTEXTPROVIDER = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (Products) => {
    setCartItems((prev) => ({ ...prev, [Products]: prev[Products] + 1 }));
  };
  const removeFromCart = (Products) => {
    setCartItems((prev) => ({ ...prev, [Products]: prev[Products] - 1 }));
  };
  console.log(cartItems);
  const productValues = { Products, cartItems, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={productValues}>
      {children}
    </ShopContext.Provider>
  );
};
