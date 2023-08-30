import React from 'react'
import Recommendation from './Recommendation'
import {BsFillInfoSquareFill} from 'react-icons/bs'

function SidebarRight() {
  return (
    <div className='hidden  lg:block lg:w-[276px] lg:basis-1/3 lg:main lg:h-fit'>
        <div className='flex justify-between items-center p-[12px]'>
           <p>Add to your feed</p>
           <BsFillInfoSquareFill/>
        </div>
        <Recommendation/>
    </div>
  )
}

export default SidebarRight