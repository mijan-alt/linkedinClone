'use client'
import { Provider } from 'react-redux'
import React from 'react'
import { clientStore } from './store'

const ReduxProvider = ({children}) => {
  return (
     <Provider store={clientStore}>
         {children}
     </Provider>
  )
}

export default ReduxProvider