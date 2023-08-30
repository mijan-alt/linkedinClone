import React from 'react'
import { SlLike } from 'react-icons/sl';
import {AiFillLike} from 'react-icons/ai'

const Commenticon = ({Icon, desc, handleClick, userLikedPost}) => {
  const isLikeIcon = Icon === SlLike; // Check if the icon is the like icon
  const iconType = isLikeIcon && !userLikedPost 
  return (
     
     
    <div onClick={()=>handleClick()}  className='flex justify-center items-center h-[28px] pt-[20px] pb-[20px] pr-[12px] pl-[12px] rounded-md gap-1 hover:bg-[#EBEBEB] cursor-pointer '>
            
          <Icon className={`text-[#666666] text-[20px] h-[28px] text-bold `}/>
        
          <p className={'text-[#666666] text-bold'}>{desc}</p>
     </div>

  
   

  )
}

export default Commenticon