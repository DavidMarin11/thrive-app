import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from '../register/components/Register'
import { Login } from '../login/components/Login'
import { Home } from '../home/Home'
import { Admin } from '../admin/Administracion'

export const RouterLogin = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/administracion'  element={<Admin/>}></Route>
            <Route path='/login'  element={<Login />}/>
            <Route path='/register'  element={<Register />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/' element={<Home />}/>
        </Routes>
    </BrowserRouter>
  )
}
