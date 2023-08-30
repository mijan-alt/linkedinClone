'use client'
import { createSlice } from "@reduxjs/toolkit"

const likeSlice = createSlice({
  initialState: {
    likedPosts: {}, // Track liked posts by post ID
    count:{}
  },
 
  name: 'likes',
  reducers: {
    incrementLikes: (state, action) => {
        const postId  = action.payload;
            // Check if the post is already liked by the user
            
                // Increment the likes
                state.count[postId] = (state.count[postId] || 0) + 1;
                // Mark the post as liked by the user
                state.likedPosts[postId] = true;
            
      },

      decrementLikes:(state, action)=>{
        const postId= action.payload;
        if (state.likedPosts[postId]){
           state.count[postId]=(state.count[postId]) -1;
           state.likedPosts[postId] = false;
        }
      }
  }
});

export const { incrementLikes, decrementLikes } = likeSlice.actions;
export default likeSlice.reducer;