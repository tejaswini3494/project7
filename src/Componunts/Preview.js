import React from "react";
import img1 from "./Alabay Assets/Alabay Assets/Alabay Games/artifacts 2.png";
import img2 from "./Alabay Assets/Alabay Assets/Alabay Games/Abilities 2.png";
import img3 from "./Alabay Assets/Alabay Assets/Alabay Games/image 3 alabay guard 2.png";
import Slider from "react-slick";
// import img4 from "./Alabay Assets/Alabay Assets/Alabay Games/Frame 3.png";

const data = [img1, img2, img3];
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "black",
        width: "40px",
        height: "40px",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    />
  );
}

export default function () {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:px-20 px-3 w-[85%] mx-auto  py-6">
      <h3 className="text-[#353535] font-extrabold font-sans text-[40px] lg:text-left text-center">
        <span className="text-[#FFA800] ">GAME</span> PREVIEWS
      </h3>

      <div className="">
        <Slider {...settings}>
          {data.map((img) => {
            return (
              <>
                <img src={img} alt="" className=" w-64" />
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
