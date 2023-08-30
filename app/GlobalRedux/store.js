'use client'

import { configureStore } from "@reduxjs/toolkit"
import likesReducer from './Feautures/counter/likeSlice'
import commentsReducer from './Feautures/Comments/commentSlice'

export const clientStore = configureStore({ 
    reducer: {
        likes:likesReducer,
        comments:commentsReducer
    } 
})
