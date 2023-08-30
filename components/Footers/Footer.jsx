import React from 'react'
import { RiMessage2Fill} from "react-icons/ri";
import {
  BsLinkedin} from "react-icons/bs";
import {  ImHome3 } from "react-icons/im";
import { IoMdPeople} from "react-icons/io";
import {BsBellFill, BsBriefcaseFill} from "react-icons/bs";
import {BiSearchAlt2} from 'react-icons/bi'
import {AiFillPlusSquare} from 'react-icons/ai'
import FooterIcon from './FooterIcon';

function Footer() {
  return (
        
<div className='fixed bottom-0 left-0 w-screen z-10 flex flex-row justify-evenly items-center bg-[#ffff] p-[12px] shadow-sm sm:hidden '>
      <FooterIcon FootIcon={ImHome3} desc='Home' />
      <FooterIcon FootIcon={IoMdPeople} desc="My network" />
      <FooterIcon FootIcon={AiFillPlusSquare} desc="Post"/>
      <FooterIcon FootIcon={BsBellFill} desc="Notifications" />
      <FooterIcon FootIcon={BsBriefcaseFill} desc="Jobs" />
    
   
  </div>
  )
}

export default Footer