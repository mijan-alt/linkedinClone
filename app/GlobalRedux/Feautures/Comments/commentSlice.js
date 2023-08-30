'use client'

import { createSlice } from "@reduxjs/toolkit"

const commentSlice = createSlice({
    name:'comments',

    initialState:{
       userComment:{},

       isCommentClicked: {}
    },

    reducers: {
       commentPosted : (state, action )=>{
         const { postId, postContent, user } = action.payload;

         if (!state.userComment[postId]) {
             state.userComment[postId] = [];
         }

         state.userComment[postId].push({
             postContent,
             posterImage: user.userImage,
             posterName: user.name
         });
       },

       checkCommentClicked: (state, action)=>{
             const postId= action.payload
             state.isCommentClicked[postId] = !state.isCommentClicked[postId]
       }
    }
})

export const  {checkCommentClicked, commentPosted} = commentSlice.actions
export default commentSlice.reducer