import React, { useState } from "react";
import { Data } from "./Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "black", width:"40px", height:"40px", alignItems:"center", justifyContent:"center", }}
      onClick={onClick}
    />
  );
}

export default function Photos() {
  
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [data,setData]=useState(Data)

  const filterItem=(category)=>{
const updateList=Data.filter((curEle)=>{
  return curEle.category===category;
})
setData(updateList)
  }
  return (
    <div className="">
      <nav className=" flex items-center justify-center gap-3 mb-5">
        <p className="text-[20px] font-bold hover:text-[#FFA800]" onClick={() => setData(Data)}>All</p>
        <p className ="text-[20px] font-bold hover:text-[#FFA800]" onClick={() => filterItem("photo")}>Photos</p>
        <p className="text-[20px] font-bold hover:text-[#FFA800]" onClick={() => filterItem("video")}>Videos</p>
      </nav>



      <div className="mx-auto w-[60%] m-1">
      <Slider {...settings} className="">
       
  {
    data.map((curEle)=>{
      return(
        <>
        
        <img src={curEle.img} alt=""  className="w-60 h-52  rounded-md bg-[#A6A6A6]  "/>
   
        {/* <video src={curEle.img}></video> */}
        </>
      )
    })
   
  }

   </Slider>
  
   
</div>

    </div>
   
  );
}
