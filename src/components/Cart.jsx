import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Contexts/ShopContext";
import Loader from "./Loader";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { cartItems, Products } = useContext(ShopContext);

  const totalPrice = Object.keys(cartItems).reduce((total, productId) => {
    const product = Products.find((item) => item.id === parseInt(productId));
    return total + product.price * cartItems[productId];
  }, 0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadpage = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    loadpage();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div className=" bg-red-pink flex flex-col gap-10 items-center justify-center w-full h-full py-10">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="font-bold text-4xl mb-5 text-red-50">Your Cart</h1>

        <div className="flex flex-col items-start">
          {Object.keys(cartItems).map((productId) => {
            const product = Products.find(
              (item) => item.id === parseInt(productId)
            );
            return (
              <div
                key={productId}
                className="flex flex-col md:flex-row items-center justify-between w-full py-2 gap-5 border-b border-gray-300">
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <img
                    src={product.img || <SkeletonLode />}
                    alt={product.name}
                    className="w-[200px] h-[200px] "
                  />
                  <span className="font-bold">{product.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Quantity: {cartItems[productId]}</span>
                  <span>${product.price * cartItems[productId]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" font-bold text-3xl text-red-50">
        Total: ${totalPrice}
      </div>
      <div className="w-[200px] h-[50px] text-center font-bold text-3xl bg-red-50 rounded-xl cursor-pointer hover:bg-red-900 hover:text-red-50">
        Buy Now
      </div>
    </div>
  );
};

export default Cart;
