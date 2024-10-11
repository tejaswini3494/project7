import React from 'react'

export default function TokenomicsNext({ text1,text2}) {
  return (
    
              <div className="bg-[#353535] rounded-2xl  xl:w-[400px]  xl:h-[120px]  lg:w-[350px] sm:w-[300px] w-[200px]  h-[60px] sm:h-[80px]  lg:h-[100px] px-3 py-1 shadow-xl shadow-[#A87D29]">
                <h4 className="text-[#FFFFFF]  font-extrabold xl:text-[26px] md:text-[20px] text-[16px]">
                  {text1}
                </h4>
                <h3 className="text-[#FFF280] font-extrabold xl:text-[40px] md:text-[30px] text-[20px]">
                  {text2}
                </h3>
              </div>
        
  )
}
