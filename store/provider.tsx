'use client'
import {FC} from "react"
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react";

import store from './store'
const StoreWrapper = ({children})=>(
    <Provider store={store}>
         <SessionProvider>
            {children}
         </SessionProvider>
    </Provider>); 

export default StoreWrapper; 