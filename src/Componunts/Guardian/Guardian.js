import React from "react";
import Icon from "../Alabay Assets/Alabay Assets/Frame 38.png";
import Img1 from "../Alabay Assets/Alabay Assets/Alabay Games/Alabay Guard/image 1 alabay guard.png";
import Img2 from "../Alabay Assets/Alabay Assets/Alabay Games/Alabay Guard/image 2 alabay guard.png";
import Img3 from "../Alabay Assets/Alabay Assets/Alabay Games/Alabay Guard/image 3 alabay guard.png";

const data = [Img1, Img2, Img3];

export default function Guardian() {
  return (
    <div
      style={{ backgroundImage: 'url("./Alabay Guard prev gradient.png")' }}
      className="h-full  object-fit    bg-fixed bg-cover bg-center lg:px-7 px-3 py-2"
    >
      <div className="flex  flex-col items-start gap-10">
        <h2 className="text-[#FFFFFF] font-cheeseburga text-[100px] ">
          ALABAY GUARDIAN{" "}
          <span className="text-[#A4A8FF] text-[30px] font-bold block font-sans -mt-10">
            SHEPHERD OF THE STEPPES{" "}
          </span>
        </h2>
        <p className="text-[#FFFFFF] text-[18px] font-bold">
          Take on the role of the legendary Alabay on a quest to uncover the
          ancient secrets of its ancestors.  
        </p>

        <button className="   bg-[#A4A8FF] flex items-center gap-5 py-1 px-3 justify-center font-bold rounded-full ">
          <img src={Icon} alt="" />

          <p>PLAY</p>
        </button>
      </div>

      <div className="py-10">
        <h2 className="text-[30px] mb-3 font-bold text-[#FFFFFF] ">
          <span className="text-[#A4A8FF]">Game </span>Preview
        </h2>
        <div className="flex gap-5 flex-wrap">
          {data.map((img) => {
            return (
              <>
                <img
                  src={img}
                  alt=""
                  className="h-[300px] w-[300px] rounded-lg border-[2px] border-[#FFFFFF]"
                />
              </>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="text-[#A4A8FF] text-[30px] font-bold">FEARTURE</h2>
        <ul className="text-[#FFFFFF] text-[18px] font-bold flex flex-col gap-5">
          <li>
            Explore a variety of landscapes, including <span className="text-[#A4A8FF]"> mountains</span>, <span className="text-[#A4A8FF]">forests</span>,
            <span className="text-[#A4A8FF]">deserts</span>, and<span className="text-[#A4A8FF]"> ancient ruins</span>.
          </li>
          <li>
            Use the Alabay's <span className="text-[#A4A8FF]">abilities </span> to solve<span className="text-[#A4A8FF]"> puzzles</span> that involve moving
            objects, activating mechanisms, or finding hidden clues.
          </li>
          <li>
            {" "}
            Discover relics that tell the story of the Alabay’s ancestors, each
            piece contributing to a larger narrative about the breed's role in
            ancient history.
          </li>
          <li>
            {" "}
            Unlock new skills and abilities for the Alabay, enhancing its
            capacity to explore and solve puzzles.
          </li>
          <li>
            Challenge Modes:   
            <ul>
              <li>
               <span className="text-[#A4A8FF]"> - Time Trials</span > : Compete in special timed challenges where the
                Alabai must navigate through complex mazes or complete puzzles
                within a time limit.
              </li>
              <li>
                {" "}
               <span className="text-[#A4A8FF]"> - Exploration Mastery </span> : A mode that rewards players for fully
                exploring every nook and cranny of the game’s world, uncovering
                all secrets
              </li>
            </ul>{" "}
              
          </li>
        </ul>

        <div className="flex gap-4 ">
          <button className="   bg-[#FFFFFF] text-black flex items-center gap-5 py-1 px-3 justify-center font-bold rounded-full ">
            <img src={Icon} alt="" />

            <p>PLAY</p>
          </button>
          <button className="    flex items-center gap-5 py-1 px-8 justify-center font-bold rounded-full  border-[2px] border-[#FFFFFF] ">
            <p className="text-[#FFFFFF]">EXIT</p>
          </button>
        </div>
      </div>
    </div>
  );
}
