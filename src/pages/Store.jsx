import React, { useEffect } from "react";
import ScrollCarousel from "scroll-carousel-react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";

const Store = () => {
  const newShoes = [
    {
      id: "1",
      name: "Nike Air Force 1",
      img: "https://images.footlocker.com/content/dam/final/footlocker/site/homepage/20200306-Nike-Air-Force-1-Restock-6up.jpg",
    },
    {
      id: "2",
      name: "Nike Air Max",
      img: "https://images.footlocker.com/content/dam/final/FootLockerInc/site/new-arrivals/new-arrival-6up-D9082102.jpg",
    },
    {
      id: "3",
      name: "Nike Cosmic Unity 3",
      img: "https://images.footlocker.com/content/dam/final/FootLockerInc/site/new-arrivals/new-arrival-6up-V2757201.jpg",
    },
    {
      id: "4",
      name: "adidas Originals Rivalry",
      img: "https://images.footlocker.com/content/dam/final/FootLockerInc/site/new-arrivals/new-arrival-6up-ID8252.jpg",
    },
    {
      id: "5",
      name: "Nike Ja Morant One",
      img: "https://images.footlocker.com/content/dam/final/FootLockerInc/site/new-arrivals/new-arrival-6up-R8785002.jpg",
    },
  ];
  const Shoes = [
    {
      id: "9",
      picture:
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "10",
      picture:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "11",
      picture:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "12",
      picture:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "1",
      picture:
        "https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "2",
      picture:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "3",
      picture:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "4",
      picture:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "5",
      picture:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "6",
      picture:
        "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div
      className="bg-red-pink w-full h-full p-10 flex flex-col items-center gap-10"
      id="store">
      <h1
        className="text-center text-white font-roboto md:text-4xl text-2xl font-bold py-5"
        data-aos="zoom-in">
        New Shoe Arrivals
      </h1>
      <div className="w-full  flex-wrap flex gap-5 items-center justify-center">
        {newShoes.map((item) => {
          return (
            <div
              data-aos="fade-down"
              key={item.id}
              className="flex flex-col gap-2 items-center hover:translate-y-5 transition-all ease-in duration-100 cursor-pointer">
              <img
                className="md:w-[200px] w-[80px] md:h-[120px] h-[60px] rounded-lg"
                src={item.img}
                alt=""
              />
              <p className="md:text-md text-xs font-thin ">{item.name}</p>
            </div>
          );
        })}
      </div>
      <Link
        to="shop"
        data-aos="zoom-in"
        className="text-end md:m-10 m-5  text-sm bg-white text-black px-3 py-1 rounded-full w-[120px] hover:bg-black hover:text-white cursor-pointer">
        See all items
      </Link>
      <div className=" w-full flex justify-center items-center border-b-2 border-red-50 md:pb-20 pb-5">
        <ScrollCarousel
          autoplay
          autoplaySpeed={8}
          speed={7}
          onReady={() => console.log("I am ready")}>
          {Shoes.map((item) => (
            <div key={item.id}>
              <div
                data-aos="zoom-out"
                className="md:w-[400px] w-[200px] md:h-[300px] h-[100px] bg-cover bg-no-repeat bg-center bg-blue-300/20 border-2 border-blue-300/70 rounded"
                style={{
                  backgroundImage: `url(${item.picture})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}></div>
            </div>
          ))}
        </ScrollCarousel>
      </div>
    </div>
  );
};

export default Store;
