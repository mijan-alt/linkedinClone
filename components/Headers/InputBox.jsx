import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'

function InputBox() {
  return (
    
    <div className=' flex items-center w-[281px] h-[34px] bg-[#EDF3F8] pt-[8px] pb-[8px] pl-[17px] pr-[17px] gap-2 rounded-sm'>
        <BiSearchAlt2 className='text-[28px]'/>
        <input type="text" placeholder='search' className='bg-transparent h-full w-full outline-none focus:w-[351px]' />
    </div>
   
   
  )
}  

export default InputBox
