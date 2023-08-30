'use client'
import React from 'react'

import Header from '@/components/Headers/Header'
import SidebarLeft from '@/components/LeftSidebar/SidebarLeft'
import Feed from '@/components/Feeds/Feed'
import SidebarRight from '@/components/RightSidebar/SidebarRight'
import Modal from '@/components/Modal'
import { useState } from "react";
import Footer from '@/components/Footers/Footer'
import { useSession } from 'next-auth/react'
import Login from '@/components/Login'
function page() {
  const {data: session} =useSession()

  const [modal, setModal] = useState(false)
 
  function handleModalClick(){
     setModal(prev=>!prev)
  }

  if(!session) return <Login />
  return (
    <div className='bg-[#F3F2F0] min-h-screen'>
        <Header/>
        <main className='sm:flex sm:flex-row mt-[24px] sm:mx-auto sm:gap-[24px] md:justify-evenly md:w-[calc(90%)] lg:w-[1128px]'>
              <SidebarLeft/>
                <Feed 
                modal={modal}
                handleModalClick={handleModalClick}
                setModal={setModal}/>
              <SidebarRight/>
         </main>
         <Footer/>
         {modal &&  
            <Modal 
            modal={modal}
            handleModalClick={handleModalClick}
            setModal={setModal}
            />
       }
    </div>
  )
}

export default page