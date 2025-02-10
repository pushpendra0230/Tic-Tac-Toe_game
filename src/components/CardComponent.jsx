import React from "react";

const CardComponent = ({ value, onClick }) => {
  return (
    <div
      className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 flex items-center justify-center 
      text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold 
      text-white bg-gradient-to-br from-blue-500 to-purple-800 rounded-xl cursor-pointer shadow-lg 
      hover:scale-110 hover:shadow-[0_0_15px_rgba(173,216,230,0.8)] transition-all duration-300 ease-in-out"
      onClick={onClick}
    >
      {value}
    </div>
  );
};
export default CardComponent;
