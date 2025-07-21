"use client"
import React from 'react'
import {Provider} from "react-redux"
import store from './components/reduxstore/store'
import NoCopyProtection from './components/NoCopyProtection'

const ReduxProvider = ({children}) => {
  return (
    <Provider store={store}>
      <NoCopyProtection   />
{children}
    </Provider>
  )
}

export default ReduxProvider
