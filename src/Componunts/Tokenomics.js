import React from "react";

import Img from "./Alabay Assets/Alabay Assets/money.png";
import TokenomicsNext from "./TokenomicsNext";

export default function Tokenomics() {
  return (
    <div className="">
      <div
        style={{ backgroundImage: 'url("Rectangle 3.png")' }}
        className=" bg-cover  bg-center    bg-no-repeat   h-[650px] sm:h-[800px] md:h-[1000px] lg:h-[1200px] xl:h-[1500px] mx-auto "
      >
        <div className="lg:px-20 px-3">
          <h2 className=" pt-[100px]  text-[#FFFFFF]  text-[40px] sm:text-[100px]  lg:text-[150px] xl:text-[200px] font-cheeseburga text-center lg:text-left">
            TOKENOMICS
          </h2>
          <div className="flex items-center justify-between flex-col lg:flex-row">
          <div className="flex flex-col gap-2">
            <TokenomicsNext text1="LIQUIDITY" text2="LOCKED"/>
            <TokenomicsNext text1="CONTRACT" text2="RENOUNCED"/>
            <TokenomicsNext text1="TAXES" text2="0%"/>
            </div>
            <img
              src={Img}
              alt=""
              className=" w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[600px]   "
              id="shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
