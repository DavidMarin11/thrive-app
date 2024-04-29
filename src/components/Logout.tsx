import React from 'react'
import { Link } from 'react-router-dom'

interface User {
    name: String
}

export const Logout = ({ name }: User) => {
    const logout = () => {
        localStorage.removeItem('login_user');
    }
  return (
    <div className='user_login'>
        <div>
            <h4>Bienvenido, {name}</h4>
        </div>
        <div className='logout'>
            <Link className='logout_link' to={'/login'} onClick={ logout }>Cerrar Sesión</Link>
        </div>
    </div>
  )
}
