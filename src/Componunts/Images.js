import React, { useEffect, useState } from "react";
import Img1 from "./Alabay Assets/Alabay Assets/Alabay Merch/black hoodie bck.png";
import Img2 from "./Alabay Assets/Alabay Assets/Alabay Merch/blue cap bck.png";
import Img3 from "./Alabay Assets/Alabay Assets/Alabay Merch/pink tee bck.png";
import Img4 from "./Alabay Assets/Alabay Assets/Alabay Merch/yellow tee bck.png";
import Img5 from "./Alabay Assets/Alabay Assets/Alabay Merch/black hoodie.png";
import Img6 from "./Alabay Assets/Alabay Assets/Alabay Merch/cap mockup.png";
import Img7 from "./Alabay Assets/Alabay Assets/Alabay Merch/pink tshirt.png";
import Img8 from "./Alabay Assets/Alabay Assets/Alabay Merch/yellow tshirt.png";

export default function Images() {
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
    }, 1500); // 2000ms = 2 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [slider]);
  return (
    <>
      {/* <div className="max-w-[1200px] h-[780px] w-full m-auto py-16 px-4">
        <div  style={{backgroundImage:`url(${slides[0].src})`}} className="w-full h-full bg-center bg-cover duration-500"></div>
        <div  style={{backgroundImage:"url('black hoodie bck.png')"}} className="w-full h-full bg-center bg-cover duration-500"></div>
    </div> */}

      <div className="mx-auto px-20">
        <div
          style={{
           
            position: "relative",
            display: "flex",
            justifyContent: "center  ",
          }}
        >
          <img src={data[slider]} alt=""  />
          <img src={data2[slider]} alt="" style={{ position: "absolute" }} />

          <div
            style={{
              position: "absolute",
              bottom: "50px",
              display: "flex",
              gap: "60px",
            }}
          >
            <button onClick={prev} className="m-[20px] ">
              -
            </button>
            <button onClick={next}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}
