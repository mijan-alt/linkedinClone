'use client'
import { createSlice } from "@reduxjs/toolkit"

const likeSlice = createSlice({
  initialState: {
    // You can initialize any relevant state properties here
    // For example, you might want to keep track of likes for specific posts
    postLikes: {} // An object to store likes for each post
  },
  name: 'like',
  reducers: {
    increment: (state, action) => {
      const { postId } = action.payload;
      if (state.postLikes[postId]) {
        state.postLikes[postId]++;
      } else {
        state.postLikes[postId] = 1;
      }
    },
    // Add more reducers for other actions like decrementing likes, etc.
  }
});

export const { increment } = likeSlice.actions;
export default likeSlice.reducer;
