import React from 'react'
import Img1 from "./Alabay Assets/Alabay Assets/jump.png";

export default function History() {
  return (
   
    
        <div style={{backgroundImage:'url("Rectangle 2 (2).png")'}} className=' h-[850px]  xl:h-[1000px] bg-cover  bg-center  object-fit  -mt-20 rounded-3xl  '>
            
        <div className=' py-[40px] px-10'>
        
        <div className='w-[120px] h-[13px] bg-[#FFF6A1]  rounded-full mx-auto '></div>
     
            
         
            <div className='flex items-center justify-center  lg:flex-row flex-col '>
                <div className=''>
                    <img src={Img1} alt="" className=' w-[450px] lg:w-[700px]' id='shadow'/>
                </div>
                <div className=''>
                    <h2 className=' text-[#FFFFFF]  text-[100px] lg:text-[140px]  xl:text-[200px] font-cheeseburga  text-center lg:text-right leading-none font-extrabold'> <span className='text-[#F76902D1]  text-[30px] lg:text-[50px] xl:text-[80px] font-mono block'>History Of</span>
                    ALABAY</h2>
                    <p className='text-[#353535] font-sans font-bold  w-[100%] lg:w-[500px]  text-[16px]  md:text-[20px] lg:text-[24px] text-center lg:text-right'> The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
                </div>
            </div>

        </div>
        </div>


  )
}
