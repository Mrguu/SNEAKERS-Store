import React, { useEffect } from "react";
import homepng from "../img/home.png";
import Navbar from "../components/Navbar";
import "aos/dist/aos.css";
import Aos from "aos";
const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className="bg-red-pink" id="home">
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center p-2 ">
        <div
          className="w-full flex gap-10 flex-col items-center mt-20"
          data-aos="fade-down">
          <h1 className="md:text-6xl text-3xl font-abc font-bold text-red-100 text-center">
            SNEAKERS
          </h1>
          <p className="text-red-100 font-bold font-roboto md:w-1/2 w-full md:text-md text-sm text-center">
            we believe that every step you take should be a stylish one. Step
            into the world of fashion, comfort, and innovation with our
            exclusive collection of sneakers. Whether you're an athlete, a
            trendsetter, or someone who simply appreciates quality footwear,
            you've come to the right place.
          </p>
        </div>
        <div data-aos="zoom-in">
          <img src={homepng} alt="1" />
        </div>
      </div>
    </div>
  );
};

export default Home;
