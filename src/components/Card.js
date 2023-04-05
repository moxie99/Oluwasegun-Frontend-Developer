import React from "react";

const Card = ({ item }) => {
  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#120302] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative w-full h-64 md:h-72">
        <img src={item.image} alt="character" />
      </div>

      <div className="flex items-center justify-between flex-1 space-x-4">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
