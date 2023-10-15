import React, { useState } from "react";

const SeleteDropDown = () => {
  const Size = [
    {
      name: "36EUR",
    },
    {
      name: "37EUR",
    },
    {
      name: "38EUR",
    },
    {
      name: "39EUR",
    },
    {
      name: "40EUR",
    },
    {
      name: "41EUR",
    },
    {
      name: "42EUR",
    },
    {
      name: "43EUR",
    },
    {
      name: "44EUR",
    },
    {
      name: "45EUR",
    },
  ];
  const [upDown, setUpDown] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div className="flex md:w-[300px] w-[200px] flex-col justify-between p-2 bg-red-100 font-bold rounded-xl  select-none ">
      <div
        onClick={() => setUpDown(!upDown)}
        className="flex justify-between cursor-pointer ">
        <p className="text-sm">
          {selected ? selected : "Choose an option(Size)"}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-6 h-6 duration-500 ${
            upDown ? "rotate-180" : "rotate-0"
          }`}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <ul
        className={`flex flex-col md:w-[300px] w-[200px] overflow-hidden absolute top-0  bg-white rounded-xl ${
          upDown ? "z-40 bg-opacity-80 max-h-auto" : "max-h-0 z-0 bg-opacity-0"
        }`}>
        {Size.map((item) => {
          return (
            <li
              key={item.name}
              className="hover:bg-sky-600 p-1 w-full rounded-lg"
              onClick={() => {
                if (item?.name?.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(item?.name);
                }
                setUpDown(false);
              }}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SeleteDropDown;
