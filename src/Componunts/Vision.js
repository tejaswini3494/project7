import React from "react";
import Img2 from "./Alabay Assets/Alabay Assets/group.png";
import Img3 from "./Alabay Assets/Alabay Assets/map.png";

// import Img4 from"./Alabay Assets/Alabay Assets/DALL·E 2024-07-15 01.28.43 - A full body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed as a construction worker. The dog should have a big_ 3.png"
// import Win from "./Win";
export default function Vision() {
  return (
    <div className="">
      <h2 className="text-[#FFA800] text-[40px] sm:text-[100px]  lg:text-[150px] xl:text-[200px] font-cheeseburga text-center lg:px-5 px-3">
        Project Vision
      </h2>

      <div
        style={{ backgroundImage: 'url("Rectangle 3.png")' }}
        className=" bg-cover  bg-center    bg-no-repeat h-[650px] sm:h-[800px] md:h-[1000px] lg:h-[1200px] xl:h-[1500px] mx-auto "
      >
        <div className="lg:px-20 px-3">
          <img src={Img2} alt="" className="" id="shadow" />
          <p className="mt-[80px] text-[#353535] font-sans font-bold  text-center text-[16px]  md:text-[20px] lg:text-[24px]  lg:px-12 px-3 leading-none">
            Our mission is to honor the heritage of the Alabay by creating a
            vibrant, loyal, and powerful community. Just as the Alabay protects
            its flock, we aim to build a pack that stands strong together.
          </p>

          <h2 className="  text-[#FFFFFF]  text-[40px] sm:text-[100px]  lg:text-[150px] xl:text-[200px] font-cheeseburga text-center lg:text-left ">
            ROAD MAP
          </h2>
          <div className="flex items-center justify-between lg:flex-row flex-col">
            <p className="text-[#353535] font-sans font-bold  text-[16px]  md:text-[20px] lg:text-[24px] text-center leading-none">
              Our journey is just beginning. Explore our roadmap to see the
              exciting milestones and future plans we have in store.
              <span className="mt-8 inline-block text-[#FFA800]">
                Join us as we grow and achieve new heights.
              </span>
            </p>
            <img
              src={Img3}
              alt=""
              className=" w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[600px] "
              id="shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
