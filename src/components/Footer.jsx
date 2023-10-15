import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div
      className="flex flex-col gap-3 bg-red-600 md:px-10 px-5 py-5"
      data-aos="fade-up">
      <div className="flex flex-wrap gap-10">
        <div className="flex flex-col gap-3 items-start md:inline hidden">
          <h1 className="text-red-50  font-abc">SNEAKERS</h1>
          <ul className="list-disc flex flex-col gap-1 font-thin text-sm text-blue-900 underline">
            <li className="cursor-pointer hover:text-blue-700">
              privacy policy
            </li>
            <li className="cursor-pointer hover:text-blue-700">
              Terms of Service
            </li>
            <li className="cursor-pointer hover:text-blue-700">
              Cookies policy
            </li>
            <li className="cursor-pointer hover:text-blue-700">Usage policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 md:items-start items-center">
          <h3 className="text-red-50 font-bold">Contact Info</h3>
          <ul className="list-disc flex flex-col gap-1 font-thin text-xs md:text-sm text-red-100">
            <li>support@sneakers.email</li>
            <li>
              Unit G1, Capital House 61 Rose Road, Konoha, Wano, E8 1LL Store
              number 14073067
            </li>
            <li>(+970) 56-897-123</li>
          </ul>
        </div>
      </div>
      <p className="text-xs font-bold md:text-end text-center">
        Copyright &copy; 2023 Sneakers.All rights reserved
      </p>
    </div>
  );
};

export default Footer;
