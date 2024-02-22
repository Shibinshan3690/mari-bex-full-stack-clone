import React from 'react'
// import {BrowserRouter, Route, Routes}  from"react-router-dom"
// import Login from './Component/Login'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Component/Login/Login'
import Registration from './Component/Registration/Registration'


const App = () => {
  return (
    <div> 
        
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App
