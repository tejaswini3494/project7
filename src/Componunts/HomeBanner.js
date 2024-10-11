import React from "react";

export default function HomeBanner() {
  return (
    <div
      style={{ backgroundImage: 'url("./back.png")' }}
      className="h-screen bg-cover  bg-center  object-fit sticky top-0 -z-10"
    >
      <h2
        className=" text-center  text-[50px] md:text-[70px] lg:text-[100px] font-extrabold   font-cheeseburga   text-shadow-xl text-[#7EFF5E]  "
        id="heading"
      >
        welcome to alabay world
      </h2>
      <div className="bg-[#181C27] h-[120px] md:h-[160px] mt-[250px] flex items-center justify-center md:px-24 py-5 px-[10px] ">
        <p className="font-normal  text-[#FFFFFF]  text-[16px] sm:text-[22px] lg:text-[30px]  font-cheeseburga transform-cpu text-center">
          where the <span>legendary Central Asian Shepherd Dog </span>meets a
          new-age adventure. <span>Join us</span> in celebrating the{" "}
          <span> strength </span>, <span> loyalty</span>, and{" "}
          <span> heritage</span> of the Alabay breed.
        </p>
      </div>
    </div>
  );
}
