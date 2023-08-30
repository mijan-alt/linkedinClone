'use client'
import React , {useState} from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import {VscClose} from 'react-icons/vsc'
import {MdPhotoCameraBack} from 'react-icons/md'
import {RiVideoFill} from 'react-icons/ri'
import {BiCalendar} from 'react-icons/bi'
import { getStorage, ref } from 'firebase/storage'
import { collection } from 'firebase/firestore'
import { uploadBytes } from 'firebase/storage'
import { db, storage } from '@/firebase'
import { addDoc } from 'firebase/firestore'
import { serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { getDownloadURL } from 'firebase/storage'

function Modal({modal, handleModalClick, setModal}) {
  const {data: session}= useSession()
  const [isPosting, setIsPosting] = useState(false); // Track posting status
  const filePickerRef= useRef(null)
  const [fileToPost, setFileToPost] = useState(null)
  const [formData, setFormData]= useState('')
console.log(formData)
  function handleChange(e){
    setFormData(e.target.value)
  }
      const sendPost =  async (e)=> {
        e.preventDefault();
        setIsPosting(true); // Set posting status to true

       try {
          let imageUrl = null;
          let videoUrl= null;
          let contentType = null; // Declare contentType here
        if(fileToPost){
            
            const storageRef = ref(storage, `media/${fileToPost.name}`);
            // Determine the file type to adjust the content type during upload
            contentType = fileToPost.type.startsWith('image/') ? 'image' : 'video';
            await uploadBytes(storageRef, fileToPost, { contentType });
          
            if (contentType==='image') {
              imageUrl = await getDownloadURL(storageRef);
            } else {
              videoUrl = await getDownloadURL(storageRef);
            }
        }
  
        await addDoc(collection(db, 'posts'),
        {
          message: formData,
          name: session.user.name,
          email: session.user.email,
          image:session.user.image,
          imageUrl: imageUrl, //store the image url
          videoUrl:videoUrl,
          timestamp:serverTimestamp(),//store a time stamp
          contentType: contentType
        }) 
     
       
         setFormData('');
         setFileToPost(null);//hide the image once it has been sent to firebase
     
         setModal(!modal)
        } catch (error) {
          console.error('Error posting:', error);
        } finally {
          setIsPosting(false); // Reset posting status to false
        }

       
    }

 


  const addFileToPost = (e) => {
    const file = e.target.files[0];
    if (file) {
        setFileToPost(file); // Rename 'setImageToPost' to 'setFileToPost'
    }
  };


 function handleClick(){
  filePickerRef.current.click()
 }
  return (
    <div className='sm:absolute sm:flex sm:items-center sm:justify-center sm:bg-[#00000091] sm:top-0 sm:bottom-0 sm:left-0 sm:right-0 sm:z-50'>
      <form onSubmit={sendPost} className='bg-[#ffff] rounded-md w-[calc(60%)] ' >
        <div className='flex items-center justify-between p-6 overflow-hidden'>
            <div className='flex items-center justify-center gap-2 rounded-sm p-2 hover:bg-[#EBEBEB] cursor-pointer'>
                <div className=' h-[40px] w-[40px]  '> 
                    <Image src={session.user.image}
                    width={40}
                    height={40}
                    className='object-cover h-[40px] rounded-full '
                    alt='user image'
                    />
                  </div> 

                    <div className='flex flex-col '>
                        <h2 className='text-[20px] text-[rgba(0,0,0,0.9)] text-bold-700'>{session.user.name}</h2>
                        <p className='text-[rgba(0,0,0,0.9)]  text-[14px]'>Post to anyone</p>
                    </div>
                </div>
                <div className='h-[40px] w-[40px] hover:bg-[#EBEBEB] rounded-full flex items-center justify-center'>
                  <VscClose onClick={handleModalClick} className='h-[20px] text-[20px]'/>
                </div>
                

            </div>
           <div className='overflow-auto w-full h-[336px]'>
                 
             <textarea 
                  className='w-full outline-none pl-6 pr-6 pt-2 pb-2 min-h-[200px]'
                  name="" id="" 
                  onChange={handleChange}
                  placeholder='Start typing'
                  value={formData}/>
            
              {/* area for display of post */}

              <div className='w-full pl-6 pr-6 '>
                 
                {fileToPost ? (
                      fileToPost.type.startsWith('image') ? ( // Handle image
                          <img
                              className='w-full rounded-md '
                              src={URL.createObjectURL(fileToPost)}
                              alt="Selected"
                          />
                      ) : (
                          // Handle video
                          <video
                              className=' w-full  '
                              controls
                          >
                              <source src={URL.createObjectURL(fileToPost)} />
                          </video>
                      )
                  ) : (
                    "" 
                  )}
            </div>
          </div>
         
              {/* icon area */}
         <div className='p-2 lines'>
            <div className='w-[56px] h-[56px] rounded-full bg-[#EBEBEB] hover:shadow-md hover:z-5 flex items-center justify-center cursor-pointer'  onClick={handleClick}>
                <MdPhotoCameraBack className='h-[20px] text-[20px]'/> 
                <input 
                  type="file" 
                  ref={filePickerRef}
                  onChange={addFileToPost}
                  hidden />
            </div>
          </div>
          {(formData || fileToPost ) ?
           <div className='flex justify-end p-6   '>
                {isPosting ? ( // Show loading indicator while posting
                  <div className='spinner-border text-[#1967D2]' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                  </div>
              ) : (
                <button className=' bg-[#0A66C2] pl-[16px] pr-[16px] pt-[6px] pb-[6px] text-center rounded-lg text-[#ffff] cursor-pointer' type='submit' onClick={(e)=>sendPost(e)}>
                  Post
                </button>
              )}
          </div> :
           <div className='flex justify-end p-6'>
                <button className=' bg-[#E8E8E8] pl-[16px] pr-[16px] pt-[6px] pb-[6px] text-center rounded-lg cursor-not-allowed' >Post</button>
           </div>
            
           
           }
         
      </form>
    </div>
  )
}

export default Modal