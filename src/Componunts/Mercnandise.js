import React, { useEffect, useState } from "react";
import Img1 from "./Alabay Assets/Alabay Assets/Alabay Merch/black hoodie bck.png";
import Img2 from "./Alabay Assets/Alabay Assets/Alabay Merch/blue cap bck.png";
import Img3 from "./Alabay Assets/Alabay Assets/Alabay Merch/pink tee bck.png";
import Img4 from "./Alabay Assets/Alabay Assets/Alabay Merch/yellow tee bck.png";
import Img5 from "./Alabay Assets/Alabay Assets/Alabay Merch/black hoodie.png";
import Img6 from "./Alabay Assets/Alabay Assets/Alabay Merch/cap mockup.png";
import Img7 from "./Alabay Assets/Alabay Assets/Alabay Merch/pink tshirt.png";
import Img8 from "./Alabay Assets/Alabay Assets/Alabay Merch/yellow tshirt.png";

import nextlogo from "./Alabay Assets/Alabay Assets/Frame 64.png";
import prevlogo from "./Alabay Assets/Alabay Assets/Frame 65.png";

export default function Mercnandise() {
  const [slider, setSlider] = useState(0);
  const data = [Img1, Img2, Img3, Img4];
  const data2 = [Img5, Img6, Img7, Img8];

  const prev = () => {
    setSlider(slider === 0 ? data.length - 1 : slider - 1);
  };
  const next = () => {
    setSlider(slider === data.length - 1 ? 0 : slider + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 1500); 

    return () => clearInterval(interval); 
  }, [slider]);
  return (
    <div className="lg:px-20 mx-auto p-3">
      <h2 className="text-[#FFA800]  text-[40px]  sm:mt-[40px] md:-mt-[9px] sm:text-[80px]  lg:text-[150px] xl:text-[200px] font-cheeseburga text-center ">
        Merchandise
      </h2>
      <div className="mx-auto lg:px-20 px-3">
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center  ",
          }}
        >
          <img src={data[slider]} alt="" className=" w-full" />
          <img src={data2[slider]} alt="" style={{ position: "absolute" }} />

          <img
            src={nextlogo}
            alt=""
            onClick={prev}
            className="w-[40px] h-[40px] absolute left-3 top-[50%]"
          />
          <img
            src={prevlogo}
            alt=""
            onClick={next}
            className="w-[40px] h-[40px] absolute right-3 top-[50%]"
          />
        </div>
      </div>
    </div>
  );
}
