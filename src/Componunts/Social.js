import React from "react";
import Img from "./Alabay Assets/Alabay Assets/social.png";
import twitter from "./Alabay Assets/Alabay Assets/twitter logo 1.png";
import mask from "./Alabay Assets/Alabay Assets/Mask group.png";
import Social2 from "./Social2";

export default function Social() {
  return (
    <div className="lg:px-20 p-3  ">
      <h2 className="text-[40px] sm:text-[100px]  lg:text-[150px] xl:text-[200px] text-center text-[#FFA800] font-cheeseburga lg:leading-[200px] leading-none mt-20">
        social media links
      </h2>

      <div className="flex justify-center items-center py-[100px]">
        <div className="bg-[#0553C8A8]  w-[35%] border-[5px] border-[#0553C8A8] rounded-3xl flex items-center justify-center flex-col gap-10 sm:py-5 py-2">
          <Social2 text="Twitter Link" icon={twitter} />
          <Social2 text="Telegram Link" icon={mask} />
        </div>
        <img
          src={Img}
          alt=""
          className="w-[150px] sm:w-[300px]  md:w-[400px] lg:w-[500px] xl:w-[600px]   "
          id="shadow"
        />
      </div>
    </div>
  );
}
