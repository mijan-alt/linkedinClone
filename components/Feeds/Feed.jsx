import React from 'react'
import InputBox from './InputBox'
import Post from './Post'
import { db } from '@/firebase'
import {useState, useEffect} from 'react'
import { collection, orderBy, onSnapshot, query } from 'firebase/firestore';
function Feed({modal, handleModalClick, setModal}) {

  const [posts, setPosts]=useState([])
   
  useEffect(()=>{
     const postsRef = collection(db,'posts');//get a reference to the post collectioin

     const quer = query(postsRef, orderBy('timestamp', 'desc'));
     
      onSnapshot(quer, (snapshot)=>{
         setPosts(snapshot.docs.map(doc=>({id:doc.id, like:doc.data().like, ...doc.data()})))
     });
     
    
  }, [])
  console.log(posts)
  


  return (
    <div className='flex flex-col w-screen gap-2 md:basis-2/3 md:gap-4 '>
        <InputBox
          modal={modal}
          handleModalClick={handleModalClick}
          setModal={setModal}
        />
        {
        posts.map( post=> 
        <Post 
          key={post.id}
          postId={post.id}
          name={post.name}
          message={post.message}
          email={post.email}
          userImage={post.image}
          postImage={post.imageUrl}
          timestamp={post.timestamp}
          videoUrl={post.videoUrl}
          contentType={post.contentType}
          like={post.like}
      
        />)
        }
        
         
    </div>
  )
}

export default Feed