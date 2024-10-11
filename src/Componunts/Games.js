import React, { useEffect, useState } from "react";
import Img1 from "./Alabay Assets/Alabay Assets/Alabay Games/alabay guard prev 2 1.png";
import Img2 from "./Alabay Assets/Alabay Assets/Alabay Games/alabay lost heritage prev 1.png";
import nextBtn from "./Alabay Assets/Alabay Assets/Alabay Games/Frame 3.png";
import { Link } from "react-router-dom";

export default function Games() {
  const [slider, setSlider] = useState(0);
  const data = [
    { img: Img1, path: "guardian" },
    { img: Img2, path: "heritage" },
  ];

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
    <div
      style={{ backgroundImage: 'url("Rectangle 3.png")' }}
      className="bg-cover bg-center bg-no-repeat h-[650px] sm:h-[800px] md:h-[1000px] lg:h-[1200px] xl:h-[1500px] mx-auto"
    >
      <h2 className="pt-[100px] text-[#FFFFFF] text-[40px] sm:text-[100px] lg:text-[150px] xl:text-[200px] font-cheeseburga text-center">
        Games
      </h2>
      <p className="text-[#353535] text-center font-extrabold text-[24px] lg:text-[40px] mb-[60px]">
        Stay tuned for upcoming games!
      </p>

      <div className="mx-auto w-[80%]">
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            borderRadius: "30px",
            backgroundColor: "black",
            width: "100%",
          }}
        >
          <Link to={`/${data[slider].path}`}>
            <img
              src={data[slider].img}
              alt="Game preview"
              className="rounded-[30px] w-full border-[5px] border-amber-50"
            />
          </Link>
          <img
            src={nextBtn}
            alt="Next"
            onClick={next}
            className="w-[40px] h-[40px] absolute top-[50%] right-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
