'use client'
import React, {useRef, useState} from 'react'
import Image from 'next/image'
import {BsThreeDots} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
import {BsGlobeEuropeAfrica} from 'react-icons/bs'
import {IoIosPersonAdd, IoIosSend} from 'react-icons/io'
import {AiTwotoneLike} from 'react-icons/ai'
import {BsSuitHeart} from 'react-icons/bs'
import {PiHandsClappingBold} from 'react-icons/pi'
import {SlLike} from 'react-icons/sl'
import {TfiCommentAlt} from 'react-icons/tfi'
import {BiRepost} from 'react-icons/bi'
import Commenticon from './Commenticon'
import { incrementLikes } from '@/app/GlobalRedux/Feautures/counter/likeSlice'
import { decrementLikes } from '@/app/GlobalRedux/Feautures/counter/likeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'
import Realcomments from './Realcomments'
import LikeIcon from './LikeIcon'
import {AiFillLike} from 'react-icons/ai'
import { checkCommentClicked, commentPosted } from '@/app/GlobalRedux/Feautures/Comments/commentSlice'


const Post = ({name, message, email, userImage, postImage, timestamp, videoUrl, contentType, key, postId, like}) => {
    const dispatch = useDispatch()
    const userLikedPost = useSelector((state) => state.likes.likedPosts[postId] || false);
    const isCommentClicked = useSelector((state)=> state.comments.isCommentClicked[postId] || false)
    const userComment = useSelector((state)=>state.comments.userComment[postId] || [])
    const likes = useSelector((state)=> state.likes.count[postId] || 0 )
    console.log(likes)
    console.log(userLikedPost)
    // const updateLikes = async (postId) => {
    //     try {
    //        const postRef = doc(db, 'posts', postId);
    //        await updateDoc(postRef, {like: likes });
           
    //     } catch (error) {
    //         console.log(error)
    //     }finally{
    //        console.log('succesful')
    //     }
    // };


    const handleLikeClick = () => {
        if(!userLikedPost)
         dispatch(incrementLikes(postId));
        //  updateLikes(postId)
         console.log('liked')
         
      };

      const handleDecrementClick = () => {
        
         dispatch(decrementLikes(postId));
        //  updateLikes(postId)
         console.log('unliked')
         
      };

    

      console.log(userLikedPost)

      const handleCommentClick = () => {
        dispatch(checkCommentClicked(postId))
        console.log(isCommentClicked)
      }
     
    const textareaRef = useRef(null) 
    const [textareaValue, setTextAreaValue]= useState('')
   console.log(textareaValue)
    const handleTextareaChange =(event)=>{
        setTextAreaValue(event.target.value);
        adjustTextareaHeight();
    }

    const adjustTextareaHeight=()=>{
        if(textareaRef.current){
            textareaRef.current.style.height ='auto';
            textareaRef.current.style.height= `${textareaRef.current.scrollHeight}px`
        }
    }

    function postComment(e){
        e.preventDefault()
        if(textareaValue){
            dispatch(commentPosted({
                postId:postId,
                postContent: textareaValue,
                user:{
                    name,
                    userImage
                }

            }))
            setTextAreaValue('')
        }
        console.log('comment posted')
    }
 
  return (
    <div className='w-full main'>
        <div className='pl-[12px] pr-[12px] pb-[12px] pt-[12px] border-b border-b-[#A4A4A4] w-full flex justify-between items-center'>
                    
            <div className='flex flex-row items-center gap-[10px]'>
                <div className='relative h-[24px] w-[24px] '> 
                    <Image src='/images/portfoliopic.jpg'
                    width={24}
                    height={24}
                    className='object-cover h-[24px] rounded-full '
                    alt='user image'
                    />
                </div> 

                <p className='text-[#A4A4A4] text-[12px]'><span className='text-[#585858] hover:text-[#6DA4DB] hover:underline cursor-pointer'>Mary Akinjene</span> commented on this</p>
            </div>
                       
                    
                
            <div className='flex items-center gap-[17px]'>
                <div className='circleHover'>
                    <BsThreeDots className='h-[20px] text-[14px]'/>
                </div>
                <div className='circleHover'>
                    <BsThreeDots className='h-[20px] text-[14px]'/>
                </div>
            </div>

        </div>
         
         

        <div className='pl-[12px] pt-[12px] pr-[12px] flex items-center justify-between '>
            <div className='flex items-center gap-[10px]'>
                <div className='relative h-[48px] w-[48px] '>
                    <Image
                        src={userImage}
                        width={48}
                        height={48}
                        className='object-cover h-[48px] rounded-full '
                        alt='user image'
                    />
                </div>

                <div className='flex flex-col '>

                    <div className='flex flex-row items-center '>
                        <p className='hover:text-[#0a66c2] hover:underline text-[rgba(0,0,0,0.9)] font-[400] cursor-pointer'>{name}</p>
                        <BsDot  className='text-[#666666]'/> 
                        <p className='text-[14px] text-[#666666]'>2nd</p>
                    </div>

                    <p className='text-[#666666] text-[12px]'>Attended Federal University of Technology Owerri</p>

                    <div className='flex items-center text-[12px]'>
                        <p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
                        <BsDot className='text-[#666666]'/>
                        <BsGlobeEuropeAfrica className='text-[#666666]'/>
                    </div>

                </div>
            </div>

              
            <div className='flex items-center h-[30px] w-[78px] text-[#0A66C2] text-[16px] hover:bg-[#E2F0FE] rounded-sm cursor-pointer'>
                {/* second flex row item */}
                <IoIosPersonAdd/>
                <p>Connect</p>
            </div>

            {/*flex row container ends */}
        </div>

        
        <div  className='h-fit p-[12px]'>
            <p>
                {message}
            </p>
        </div>

         
        <div>
            {contentType==='video' ? (
                videoUrl &&
                <video controls className='w-full object-cover cursor-pointer'>
                <source src={videoUrl} type='video/mp4' />
                Your brower does not support video playback
                </video>
            ) : (
                postImage &&
                <img src={postImage} alt='postImage' className='w-full object-cover cursor-pointer' />
                
            )}
        </div>
       
        <div className='flex items-center justify-between  p-[12px] lines w-full'>

          {userLikedPost &&
            <div className=' flex items-center'>
                {/* left flex */}
                <div className='stackedIcons bg-[#2A7BCD]'>
                    <AiTwotoneLike className='text-[#D0E8FF] text-[10px]'/>  
                </div>

                <div className='stackedIcons bg-[#DF704D]'>
                    <BsSuitHeart className='text-[#FFF3F0] text-[10px]'/>  
                </div>

                <div className='stackedIcons bg-[#336D25]'>
                    <PiHandsClappingBold className='text-[#DDF6D1] text-[10px]'/>  
                </div>

                <p className='text-[#666666]'>{likes}</p>

            </div>
              }
            
            <div className='flex items-center text-[#666666] text-[12px]  '>
                {/* right flex */}
                <p>810 comments</p>
                <BsDot/>
                <p>110 repost</p>
            </div>
        
        </div>
      
        <div className=' flex items-center justify-evenly min-w-[320px] sm:pl-[15px] sm:pr-[15px] pt-[12px] w-screen sm:w-full '>
            {/* comment section*/}
       
            <LikeIcon UnlikeState={SlLike} LikeState={AiFillLike} desc='Like'  
            handleClick={handleLikeClick} 
            userLikedPost={userLikedPost}
            handleDecrementClick={handleDecrementClick}/>
            <Commenticon Icon={TfiCommentAlt} desc='Comment' handleClick={handleCommentClick}/>
            <Commenticon  Icon={BiRepost} desc='Respost'/>
            <Commenticon  Icon={IoIosSend} desc='Send'/>
        </div>
         
        {isCommentClicked &&
        <div className='w-full'>

            <form>
                <div className='flex items-center gap-2 p-6'>
                    {/*flex box input area */}

                    <div className=' h-[40px] w-[40px]  '>
                        <Image
                            src={userImage}
                            width={40}
                            height={40}
                            className='object-cover h-[40px] rounded-full '
                            alt='user image'
        
                        />
                    </div>

                    <div className='flex flex-grow  box-border min-h-[40px] border border-gray-500 rounded-2xl '>
                        {/* flex box for input box */}
                        <textarea 
                        ref={textareaRef}
                        value={textareaValue}
                        onChange={handleTextareaChange}
                        type='text'
                        placeholder='Add a comment'
                        className='w-full rounded-tl-2xl rounded-bl-2xl outline-none box-border placeholder:align-middle  pl-[10px]'
                        style={{ overflow: 'hidden', resize: 'none', minHeight: '40px' , textAlign:'justify', padding:'auto'}}
                        
                        />

                        <span role="img" aria-label="Happy" className="mx-2">😊</span>
                        
                    </div>

                </div>

                {textareaValue && 
                <button className=' bg-[#0A66C2]  pl-[13px] pr-[13px]  box-border  rounded-2xl ml-[71px]
                text-[#ffff] cursor-pointer flex items-center justify-center' type='submit' onClick={postComment}>
                   <p className='text-[14px] text-bold'>Post</p>
                </button>
                }
            </form>

            <div className='h-fit p-6  flex flex-col gap-2 w-full box-border'>
                  {userComment && userComment.map((comment)=>
                   <Realcomments
                     key={comment.postId}
                     realComments={comment.postContent}
                     posterPicture={comment.posterImage}
                     posterName={comment.posterName}
                   />
                   )}
                 
                
                
            </div>
        </div> }

    </div>
    
    
  )
}

export default Post