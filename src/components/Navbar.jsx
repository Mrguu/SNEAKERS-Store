import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { Link } from "react-scroll";
import { Link as ReactRouterLink } from "react-router-dom";

const Navbar = () => {
  let links = [
    { name: "Home", link: "home" },
    { name: "Store", link: "store" },
    { name: "About", link: "about" },
    { name: "Service", link: "service" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed z-30 bg-opacity-90 w-full flex justify-between items-center md:p-5 p-3 rounded-b-xl shadow-4xl bg-red-pink">
      <ReactRouterLink
        to="/"
        className="md:text-3xl text-red-100 font-bold cursor-pointer font-abc text-xl">
        SNEAKERS
      </ReactRouterLink>
      <div className="md:hidden " onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer absolute right-[150px] top-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              open
                ? "M6 18L18 6M6 6l12 12"
                : "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            }
          />
        </svg>
      </div>
      <div
        className={`duration-500 flex bg-opacity-80 justify-around items-center md:w-1/3 w-full md:bg-transparent bg-red-600 right-1 absolute md:static md:flex-row flex-col ${
          open ? "top-16 opacity-100" : "md:opacity-100 opacity-0 top-[-500px]"
        } `}>
        {links.map((item) => {
          return (
            <Link
              to={item.link}
              key={item.name}
              duration={600}
              smooth={true}
              className="font-bold text-red-200 hover:text-red-400 cursor-pointer">
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-3 cursor-pointer  hover:text-red-300">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <ReactRouterLink to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-3 cursor-pointer  hover:text-red-300">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </ReactRouterLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-3 cursor-pointer hover:text-red-300">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
    </header>
  );
};

export default Navbar;
