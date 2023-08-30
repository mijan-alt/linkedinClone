import React from 'react'
import Image from 'next/image'
import { BsDot } from 'react-icons/bs'
const Realcomments = ({ realComments, posterPicture, posterName}) => {
  return (
    
    <div className='flex justify-between gap-2'>

        <div className='relative h-[40px] w-[40px] '> 
            <Image src={posterPicture}
                width={40}
                height={40}
                className='object-cover h-[40px] rounded-full '
                alt='user image'
                layout="fixed" 
            />
        </div> 

        <div className='p-[8px] bg-[#F2F2F2] w-[471px] rounded-md rounded-tl-none'>

            <div className='flex justify-between items-center'>

                <div className='flex flex-col '>

                    <div className='flex flex-row items-center '>
                        <p className='hover:text-[#0a66c2] hover:underline text-[rgba(0,0,0,0.9)] font-[400] cursor-pointer'>{posterName}</p>
                        <BsDot  className='text-[#666666]'/> 
                        <p className='text-[14px] text-[#666666]'>3rd</p>
                    </div>

                    <p className='text-[#666666] text-sm'>Forensic engineer at yaale</p>

                    <div className='flex items-center text-[12px]'>
                        <p>anything</p>
                        <BsDot className='text-[#666666]'/>
                    </div>

                </div>


                <p className='text-[#666666] text-[12px]'>2d(edited)</p>

            </div>

            
            <p className='text-[#000000E6] text-[14px] font-[400]'>
                {realComments}
            </p>
            
        
        </div>

    </div>
  )
}

export default Realcomments