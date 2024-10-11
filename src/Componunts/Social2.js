import React from 'react'

export default function Social2({icon,text}) {
  return (
    <div className='flex items-center justify-center gap-2'>
  <div className='bg-[#353535] w-[28px] h-[28px] sm:h-[35px] sm:w-[35px] flex items-center justify-center rounded-full p-2'>
  <img src={icon} alt="" className='sm:h-[15px] sm:w-[15px] w-[8px] h-[8px]'/>
  </div>
  <p className='text-[#FFFFFF]  text-[12px] sm:text-[20px] font-extrabold '>{text}</p>
</div>
  )
}
