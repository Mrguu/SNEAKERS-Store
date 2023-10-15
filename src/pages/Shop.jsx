import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Contexts/ShopContext";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonLode from "../components/Skeleton";

const Shop = () => {
  const { Products, addToCart, cartItems } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadpage = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    loadpage();
  }, []);
  return (
    <div className="w-full md:h-full h-screen bg-red-pink">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-20 gap-10 ">
        <h1 className="md:text-5xl text-3xl font-bold text-red-100 text-center">
          Here Our Products!
        </h1>
        <div className="flex md:gap-10 gap-5 flex-wrap items-center justify-center">
          {Products.map((item) => {
            return (
              <Link
                to={`/shop/${item.id}`}
                className="hover:scale-105 duration-300"
                key={item.id}>
                <ul key={item.id} className="md:w-[300px] w-[100px] h-full ">
                  <li className="flex flex-col gap-5">
                    {isLoading ? (
                      <SkeletonLode />
                    ) : (
                      <img
                        className="md:w-full w-[100px] md:h-[250px] h-[80px] bg-white rounded-md"
                        src={item.img}
                        alt=""
                      />
                    )}
                  </li>
                </ul>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
