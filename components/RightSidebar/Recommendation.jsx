import React from 'react'
import Image from 'next/image'
import {AiOutlinePlus} from 'react-icons/ai'
function Recommendation() {
  return (
    <div className='flex items-center gap-[10px] p-[12px]'>
        <div className=' h-[48px] w-[48px] cursor-pointer'> 
            <Image src='/images/portfoliopic.jpg'
            width={48}
            height={48}
            className='object-cover h-[48px] rounded-full '
            alt='user image'
            />
        </div> 

        <div className='flex flex-col items-center '>
            <p className='text-[#4B4B4B] font-[600] text-[14px] h-[20px]'>Mijan Richard</p>
            <p className='text-[#C9C9C9] text-[12px] font-[400]'>Senior Recruiter</p>
            <div className='flex items-center justify-around rounded-xl  border border-[#404040] pt-[5px] pb-[5px] pr-[16px] pl-[16px] hover:bg-[#EBEBEB] hover:border-black'>
                 <AiOutlinePlus className='text-[#666666]'/>
                 <p className='text-[#666666]'>Follow</p>
            </div>
        </div>
    </div>
  )
}

export default Recommendation