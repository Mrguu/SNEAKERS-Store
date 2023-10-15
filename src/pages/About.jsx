import React, { useEffect } from "react";
import about from "../img/about.png";
import "aos/dist/aos.css";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div
      className="w-full md:h-screen h-full bg-red-pink md:p-10 p-5"
      id="about">
      <h1
        className="md:text-4xl text-3xl font-bold text-red-50 text-center"
        data-aos="fade-down">
        About Us
      </h1>
      <div className="flex md:flex-row flex-col items-center md:my-10 my-0  border-b-2 border-white pb-5">
        <div className="md:w-1/2 w-full" data-aos="fade-left">
          <img src={about} alt="" />
        </div>
        <div
          className="md:w-1/2 w-full md:text-sm text-xs font-bold text-red-50 text-justify"
          data-aos="zoom-in">
          Welcome to SNEAKERS, where passion for sneakers meets exceptional
          service. We are more than just a sneaker store; we are a community of
          shoe enthusiasts dedicated to providing you with the best footwear
          experience possible. Your About Us page is a great opportunity to
          connect with your customers on a personal level. It allows you to
          share your brand story, values, and mission, giving customers a reason
          to trust and support your sneaker shop. Here's a template to help you
          get started on your About Us page: About Us Welcome to SNEAKERS, where
          passion for sneakers meets exceptional service. We are more than just
          a sneaker store; we are a community of shoe enthusiasts dedicated to
          providing you with the best footwear experience possible. Our Story
          SNEAKERS was founded with a simple yet powerful vision: to create a
          space where sneaker lovers could find their perfect pair while
          receiving expert guidance and unmatched customer service. Our journey
          began BLA BLA, and ever since, we have been committed to curating a
          diverse selection of sneakers, ensuring that every customer finds
          something they love.
        </div>
      </div>
    </div>
  );
};

export default About;
