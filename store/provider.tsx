'use client'
import {FC} from "react"
import { Provider } from 'react-redux'
import store from './store'
const StoreWrapper = ({children})=>(
    <Provider store={store}>
        {children}
    </Provider>); 

export default StoreWrapper; 