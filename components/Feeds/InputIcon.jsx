import React from 'react'

function InputIcon({Icon, desc, color}) {
  return (
    <div className='hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-[2px] lg:basis-1/4 lg:w-fit lg:h-[48px] lg:rounded-md lg:hover:bg-[#EBEBEB] lg:cursor-pointer'>
        <Icon className={`${color} h-[28px] text-2xl`}/>
        <p>{desc}</p>
    </div>
  )
}

export default InputIcon