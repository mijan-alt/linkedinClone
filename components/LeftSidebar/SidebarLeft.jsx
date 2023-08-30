
import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
function SidebarLeft() {
    const {data:session}= useSession()
  return (
    <div className='hidden sm:block sm:w-[225px] sm:main sm:h-fit md:basis-1/3'>
        <div className='h-[56.25px] bg-[#A0B4B7] rounded-tr-md rounded-tl-md '>
         
        </div>
        <div className='flex flex-col justify-center items-center pl-[12px] pr-[12px] lines'>
            <div className=' h-[72px] w-[72px] cursor-pointer'> 
                <Image src={session.user.image}
                width={72}
                height={72}
                className='object-cover h-[72px] rounded-full mt-[-38px] '
                alt='user image'
                />
            </div> 

            <div className='text-[16px] text-center cursor-pointer'>{session.user.name}</div>
             <p className='mt-[4px] text-[12px] text-center'>Engineering intern at Kent German Global Limited</p>

        </div>

        {/* connections */}
        <div className='pt-[12px] pl-[12px] pr-[12px] lines'>
           <div className='flex flex-row justify-between text-[12px] hover:bg-[#EBEBEB] cursor-pointer'>
               <div className='text-[12px] '>
                  <p>Connections</p> 
                  <p className='text-[rgba(0, 0, 0, 0.9) font-bold] '>Grow your network</p>
               </div>
                <p className='text-[#0A6ECA]'>75</p>
           </div>
             <div className='text-[12px] mt-2'>
                 <div className='flex justify-between hover:bg-[#EBEBEB] cursor-pointer'>
                     <p>Who's viewed your profile</p>
                     <p className='text-[#0A6ECA]'> 1</p>
                 </div>
             </div>
        </div>

        <div className='pt-[12px] pl-[12px] pr-[12px] text-[12px] lines'>
            <p>Access Exclusive tools and insights</p>
            <p>Get Hired.Try premium</p>
        </div>
         
        <div className='pt-[12px] pl-[12px] pr-[12px] text-[12px]'>
            My items
        </div>
      
    </div>
  )
}

export default SidebarLeft