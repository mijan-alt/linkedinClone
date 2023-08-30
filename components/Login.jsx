
'use client'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { getProviders } from 'next-auth/react'
import {useState, useEffect} from 'react'
import { Provider } from 'react'
import ProviderButton from './ProviderButton'

function Login() {
  
const [providers, setProviders]= useState(null);
console.log(providers)
useEffect(()=>{
    const setUpProviders= async ()=>{
      const response = await getProviders()
      setProviders(response)
    }
    setUpProviders()
},[])
  return (
    <div className="flex flex-col items-center justify-center">
        {/* <Image
           src="https://links.papareact.com/t4i"
           height={400}
           width={400}
           objectFit="contain"
        /> */}

         <div className='flex flex-col gap-1'>

             {providers && Object.values(providers).map((provider)=>(
              <ProviderButton
                 name={provider.name}
                 id={provider.id}
                 signIn={signIn}
                 index={providers}
              />
             
        ))}
        </div>
       
        
      
       
    </div>
  )
}

export default Login