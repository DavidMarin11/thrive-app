import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from '../register/components/Register'
import { Login } from '../login/components/Login'

export const RouterLogin = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'  element={<Login />}/>
            <Route path='/login'  element={<Login />}/>
            <Route path='/register'  element={<Register />}/>
        </Routes>
    </BrowserRouter>
  )
}
