import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import { Signup } from './pages/Signup'
import {Signin} from './pages/Signin'
import {Dashboard} from './pages/Dashboard'
import {Send} from './pages/Send'
import Balance from './pages/balance'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/signup'  element={<Signup/>}></Route>
<Route path='/signin' element={<Signin/>}></Route>
<Route path='/dashboard' element={<Dashboard/>}></Route>
<Route path='/send' element={<Send/>}></Route>
<Route path='/balance' element={<Balance/>}></Route>


    </Routes>
    
    
    
    </BrowserRouter>
     
    </>
  )
}

export default App
