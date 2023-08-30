import React from 'react'

const LikeIcon = ({desc, handleClick, userLikedPost, LikeState, UnlikeState, handleDecrementClick}) => {
  return (
    <>
    { !userLikedPost ?
    <div onClick={()=>handleClick()}  className='flex justify-center items-center h-[28px] pt-[20px] pb-[20px] pr-[12px] pl-[12px] rounded-md gap-1 hover:bg-[#EBEBEB] cursor-pointer '>
            
        <UnlikeState className={`text-[#666666] text-[20px] h-[28px] text-bold `}/>
        
        <p className={'text-[#666666] text-bold'}>{desc}</p>
    </div> :

    <div onClick={()=>handleDecrementClick()}  className='flex justify-center items-center h-[28px] pt-[20px] pb-[20px] pr-[12px] pl-[12px] rounded-md gap-1 hover:bg-[#EBEBEB] cursor-pointer '>
            
         <LikeState className={`text-blue-500 text-[20px] h-[28px] text-bold `}/>
         
         <p className={'text-[#666666] text-bold'}>{desc}</p>
     </div>
    
   }
    </>
    
  )
}

export default LikeIcon