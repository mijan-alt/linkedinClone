import React from 'react'

function FooterIcon({FootIcon, desc}) {
  return (
    <div className='flex flex-col items-center text-[#666666]'>
      <FootIcon className='text-[20px]'/>
      <p>{desc}</p>
 </div>
  )
}

export default FooterIcon