import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Contexts/ShopContext";
import { useNavigate, useParams } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import SeleteDropDown from "./SeleteDropDown";

const ProductDetail = () => {
  const { Products, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const product = Products.find((item) => item.id === parseInt(id));
  const handleAddToCart = () => {
    addToCart(product.id);
    navigate("/cart");
  };
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full md:h-screen h-full bg-red-pink flex md:flex-row flex-col gap-5 items-center justify-between md:p-20 p-5">
      <div className="md:w-auto " data-aos="zoom-in">
        <img className="w-[500px]" src={product.img} alt="" />
      </div>
      <div
        data-aos="zoom-out"
        className=" md:w-1/2 w-full flex flex-col justify-around md:h-[500px] h-[400px] rounded-xl items-center justify-center bg-red-600 drop-shadow-5xl">
        <h1 className="md:text-4xl text-3xl font-bold text-red-100 font-abc">
          {product.name}
        </h1>
        <p className="text-2xl font-bold text-red-100">
          Price : ${product.price}.0
        </p>
        <div className="flex gap-4 items-center">
          <span className="animate-ping h-2 w-2  rounded-full bg-black"></span>
          <div className="text-lg font-bold text-red-50">Items is in stock</div>
        </div>
        <SeleteDropDown />

        <button
          className="bg-red-100 text-red-950 font-bold p-2 rounded-md hover:bg-red-900 hover:text-red-50"
          onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
