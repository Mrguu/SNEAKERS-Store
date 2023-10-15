import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen bg-red-pink flex items-center justify-center">
      <div>
        <div className="flex flex-row gap-2">
          <div className="w-10 h-10 rounded-full bg-red-50 animate-bounce"></div>
          <div className="w-10 h-10 rounded-full bg-red-50 animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-10 h-10 rounded-full bg-red-50 animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
