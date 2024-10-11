import React from "react";
import Img1 from "./Alabay Assets/Alabay Assets/p1.png";
import Img2 from "./Alabay Assets/Alabay Assets/p2.png";

import Img3 from "./Alabay Assets/Alabay Assets/p3.png";
import Img4 from "./Alabay Assets/Alabay Assets/p4.png";
export default function Win() {
  return (
    <>
      <div className="flex items-center justify-center gap-1  mt-[300px]  lg:px-20 px-2  flex-wrap ">
        <div className="bg-gradient-to-b from-[#DBC70C] 0%, text-[#FFF280] 100% xl:w-56 md:w-36 sm:w-56 w-16  lg:w-44 sm:h-[400px] h-[200px]  rounded-tl-3xl">
          <p className="text-[#FFFFFF] sm:text-[20px] text-[9px] text-center font-sans font-extrabold px-2 py-2">
            Community Building{" "}
            <span className="text-[#FFFFFF] sm:text-[16px] text-[8px] ">
              {" "}
              and Initial Launch
            </span>
          </p>

          <img src={Img1} alt="" className="-z-[100px]" />

          {/*  */}
        </div>
        <div className="bg-gradient-to-b from-[#00D4D4] 0%, text-[#41FFFF] 100% xl:w-56 md:w-36 sm:w-56 w-16  lg:w-44 sm:h-[400px] h-[200px] ">
          <p className="text-[#FFFFFF] sm:text-[24px] text-[10px] text-center font-sans font-extrabold px-2 py-2">
            Merchandise{" "}
            <span className="text-[#FFFFFF] sm:text-[19px] text-[8px]">
              Store Launch
            </span>
          </p>
          <img src={Img2} alt="" className="" />
        </div>
        <div className="bg-gradient-to-b from-[#D427FF] 0%, text-[#D427FF]  100% xl:w-56 md:w-36 lg:w-44 sm:w-56 w-16  sm:h-[400px] h-[200px]">
          <p className="text-[#FFFFFF] sm:text-[24px] text-[10px] text-center font-sans font-extrabold px-2 py-2">
            Community Events
            <span className="text-[#FFFFFF] sm:text-[19px] text-[8px]">
              {" "}
              contests
            </span>
          </p>
          <img src={Img3} alt="" className="" />
        </div>
        <div className="bg-gradient-to-b from-[#8F3A3C] 0%, text-[#8F3A3C] 100% xl:w-56 md:w-36 sm:w-56 w-16 lg:w-44  sm:h-[400px] h-[200px] rounded-tr-3xl">
          <p className="text-[#FFFFFF] sm:text-[24px] text-[10px] text-center font-sans font-extrabold px-2 py-2">
            Expansion and New{" "}
            <span className="text-[#FFFFFF] sm:text-[19px] text-[8px] ">
              Features
            </span>
          </p>
          <img src={Img4} alt="" className="" />
        </div>
      </div>
    </>
  );
}

