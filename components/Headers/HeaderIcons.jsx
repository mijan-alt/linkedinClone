import React from 'react'

function HeaderIcons({HeadIcon, desc}) {
  return (
    <div className='flex flex-col items-center justify-center cursor-pointer pb-1 hover:border-b text-[#666666] hover:border-b-[#191919] 
       hover:text-[#191919]'>
         <HeadIcon className='text-[20px]'/>
         <p>{desc}</p>
    </div>
  )
}

export default HeaderIcons