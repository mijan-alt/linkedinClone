import React from 'react'
import InputBox from './InputBox'

import { RiMessage2Fill} from "react-icons/ri";
import {
  BsLinkedin} from "react-icons/bs";
  import HeaderIcons from './HeaderIcons';
import {  ImHome3 } from "react-icons/im";
import { IoMdPeople} from "react-icons/io";
import {BsBellFill} from "react-icons/bs";
import Image from 'next/image';
import {BiSearchAlt2} from 'react-icons/bi'

 import {BsBriefcaseFill}  from 'react-icons/bs'
 import { useSession } from 'next-auth/react';
    
function Header() {
  const {data:session}= useSession()
  return (
            
    <div className=' shadow-md sticky left-0 right-0 top-0 pt-[18px] pb-[18px] bg-[#ffff] z-10'>
          <div className='flex items-center h-full w-full justify-evenly lg:w-[1128px] mx-auto'>

              <div className=' h-[40px] w-[40px] sm:hidden '> 
                  <Image src={session.user.image}
                  width={40}
                  height={40}
                  className='object-cover h-[40px] rounded-full '
                  alt='user image'
                  />
               </div> 
              <div className='sm:flex sm:flex-row sm:items-center sm:mr-[134px]'>
                  <BsLinkedin className='hidden sm:block sm:text-[#0A66C2] sm:h-[34px] sm:text-[41px] '/>
                  <InputBox/>
                  <BiSearchAlt2 className='hidden sm:hidden md:text-[28px]  '/>

             </div>
              <RiMessage2Fill className='text-[20px] text-[#666666] lg:hidden'/>
                
              <div className='hidden sm:flex sm:flex-row sm:justify-center sm:gap-3 sm:flex-shrink-0 sm:flex-grow sm:max-w-[481px]'>
                  < HeaderIcons HeadIcon={ImHome3} desc='Home'/>
                  < HeaderIcons HeadIcon={IoMdPeople} desc='My Network'/>
                  < HeaderIcons HeadIcon={BsBriefcaseFill} desc='Jobs'/>
                  < HeaderIcons HeadIcon={RiMessage2Fill} desc='Messaging'/>
                  < HeaderIcons HeadIcon={BsBellFill} desc='Notifications'/>
                  
                   <div className=' h-[40px] w-[40px] '> 
                      <Image src={session.user.image}
                      width={40}
                      height={40}
                      className='object-cover h-[40px] rounded-full '
                      alt='user image'
                      />
                  </div> 
                
                  
              </div>
          </div>    
         
         
    </div>
  )
}

export default Header