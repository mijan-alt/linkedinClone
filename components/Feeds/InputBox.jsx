import React from 'react';
import Image from 'next/image';
import InputIcon from './InputIcon';
import {MdPhotoCameraBack} from 'react-icons/md'
import {RiVideoFill} from 'react-icons/ri'
import {BiCalendar} from 'react-icons/bi'
import {PiArticleBold} from 'react-icons/pi'
import { useSession } from 'next-auth/react';

function InputBox({modal, handleModalClick, setModal}) {
    const {data:session }= useSession()
  return (
    <div className='hidden sm:block  sm:main sm:h-fit'> 
        <div className='sm:flex sm:flex-row sm:items-center sm:p-[12px] sm:gap-[10px]'>
            <div className=' h-[48px] w-[48px]'> 
                <Image src={session.user.image}
                width={48}
                height={48}
                className='object-cover h-[48px] rounded-full  '
                alt='user image'
                />
            </div> 

            <div onClick={()=>handleModalClick()}  className='rounded-3xl w-[299px] h-[48px] border border-[#B2B2B2] flex items-center  flex-grow hover:bg-[#EBEBEB] pl-[17px] cursor-pointer'>
                <p className='text-[#6E6E6E] justify-self-start'>Start a post</p> 
            </div>
        </div>
        <div className='sm:flex sm:flex-grow sm:w-full sm:justify-center sm:p-[12px]'>
            <InputIcon Icon={MdPhotoCameraBack} desc="Photo" color='text-[#378FE9]'/>
            <InputIcon Icon={RiVideoFill} desc="Video" color='text-[#5F9B41]'/>
            <InputIcon Icon={BiCalendar} desc="Event" color='text-[#C37D16]'/>
            <InputIcon Icon={PiArticleBold} desc="Write article" color='text-[#E16745]'/>
        </div>
    </div>
  )
}

export default InputBox