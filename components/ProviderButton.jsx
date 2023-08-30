import React from 'react'

function ProviderButton({name, id, signIn, index}) {

    
  return (
    
        <div key={name} onClick={()=>signIn(id)} className={`p-2 ${(name=='Facebook')? 'bg-blue-500': 'bg-red-500'} rounded-md text-white
             text-center cursor-pointer`}>Login with {name}
        </div>
    
  )
}

export default ProviderButton