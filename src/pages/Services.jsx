import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import item1 from "../img/item1.png";
import item2 from "../img/item2.png";
import item3 from "../img/item3.png";
import item4 from "../img/item4.png";
import item5 from "../img/item5.png";
import item6 from "../img/item6.png";

const Services = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div
      className="w-full h-full bg-red-pink flex flex-col items-center gap-5  md:p-10 p-5"
      id="service">
      <h1
        className="text-center md:text-4xl text-3xl font-bold text-red-50"
        data-aos="zoom-in">
        Our Services
      </h1>
      <p
        className="md:text-sm text-xs font-bold text-red-200 text-center my-5"
        data-aos="zoom-in">
        Discover a world of exceptional services at SNEAKERS. We're committed to
        enhancing your sneaker shopping experience in every way possible
      </p>
      <div className="flex flex-wrap flex-row w-5/6 items-center justify-center gap-5">
        <div
          className="md:w-[300px] w-auto md:h-[300px] h-auto bg-red-600 shadow-2xl flex flex-col px-2 md:pt-5 pt-0 pb-2 rounded-md border-2 border-white items-center md:gap-10 gap-3  text-center"
          data-aos="fade-right">
          <img className="w-10 h-10" src={item1} alt="" />
          <h2 className="text-md font-bold text-red-200">
            Personalized Fitting Assistance
          </h2>
          <p className="md:text-sm text-xs text-red-50">
            Find your perfect fit with our expert guidance. Our staff ensures
            you get sneakers tailored to your unique style and comfort needs.
          </p>
        </div>
        <div
          className="md:w-[300px] w-auto md:h-[300px] h-auto bg-red-600 shadow-2xl flex flex-col px-2 pt-5 pb-2 rounded-md border-2 border-white items-center md:gap-10 gap-3 text-center"
          data-aos="fade-right">
          <img className="w-10 h-10" src={item2} alt="" />
          <h2 className="text-md font-bold text-red-200">
            Membership and Rewards
          </h2>
          <p className="text-sm text-red-50">
            Join our membership program for exclusive benefits. Earn points,
            access members-only events, and enjoy special discounts as our
            valued member.
          </p>
        </div>
        <div
          className="md:w-[300px] w-auto md:h-[300px] h-auto bg-red-600 shadow-2xl flex flex-col px-2 pt-5 pb-2 rounded-md border-2 border-white items-center md:gap-10 gap-3 text-center"
          data-aos="fade-right">
          <img className="w-10 h-10" src={item3} alt="" />
          <h2 className="text-md font-bold text-red-200">
            Expert Sneaker Advice
          </h2>
          <p className="text-sm text-red-50">
            Our knowledgeable team is passionate about sneakers. Ask us anything
            - from trends to performance features, we've got you covered.
          </p>
        </div>
        <div
          className="md:w-[300px] w-auto md:h-[300px] h-auto bg-red-600 shadow-2xl flex flex-col px-2 pt-5 pb-2 rounded-md border-2 border-white items-center md:gap-10 gap-3 text-center"
          data-aos="fade-left">
          <img className="w-10 h-10" src={item4} alt="" />
          <h2 className="text-md font-bold text-red-200">
            Sneaker Cleaning and Repair
          </h2>
          <p className="text-sm text-red-50">
            Keep your sneakers fresh and long-lasting. Our experts offer
            professional cleaning and repair services to ensure your shoes look
            brand new.
          </p>
        </div>
        <div
          className="md:w-[300px] w-auto md:h-[300px] h-auto bg-red-600 shadow-2xl flex flex-col px-2 pt-5 pb-2 rounded-md border-2 border-white items-center md:gap-10 gap-3 text-center"
          data-aos="fade-left">
          <img className="w-10 h-10" src={item5} alt="" />
          <h2 className="text-md font-bold text-red-200">
            Customization Services
          </h2>
          <p className="text-sm text-red-50">
            Make a statement with personalized sneakers. Our customization
            services let you create a unique pair that reflects your
            individuality.
          </p>
        </div>
        <div
          className="md:w-[300px] w-auto md:h-[300px] h-auto bg-red-600 shadow-2xl flex flex-col px-2 pt-5 pb-2 rounded-md border-2 border-white items-center md:gap-10 gap-3 text-center"
          data-aos="fade-left">
          <img className="w-10 h-10" src={item6} alt="" />
          <h2 className="text-md font-bold text-red-200">
            Online Shopping Convenience
          </h2>
          <p className="text-sm text-red-50">
            Shop anytime, anywhere on our user-friendly website. Enjoy secure
            payments and swift deliveries right to your doorstep.
          </p>
        </div>
      </div>
      <p
        className="md:text-sm text-xs font-bold text-red-200 text-center my-5"
        data-aos="zoom-in">
        At SNEAKERS, we're not just selling sneakers; we're delivering an
        unmatched service experience. Step into style, comfort, and expertise –
        your sneaker journey starts here.
      </p>
    </div>
  );
};

export default Services;
