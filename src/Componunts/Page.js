import React from "react";
import Social from "./Social";
import Games from "./Games";
import Mercnandise from "./Mercnandise";
import Photos from "./Photos";
import Preview from "./Preview";
import HomeBanner from "./HomeBanner";
import History from "./History";
import Tokenomics from "./Tokenomics";
import Win from "./Win";
import Vision from "./Vision";

export default function Page() {
  return (
    <div className="">
      <HomeBanner />
      <div className=" w-11/12 mx-auto bg-white rounded-3xl    ">
        <History />
        <Photos />
        <Vision />
        <Win />
        <Tokenomics />
        <Mercnandise />
        <Games />
        <Preview />
        <Social />
      </div>
    </div>
  );
}
