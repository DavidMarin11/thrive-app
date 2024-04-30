import { NavLink } from 'react-router-dom'

import './styles.css'
import { Logout } from './Logout';

export function Navbar () {
  let user = JSON.parse(localStorage.getItem("login_user"));
  return (
    <nav className='navbar'>
      <h1>THRIVE</h1>

        <section className="nav-items">
          <ul>
            <NavLink
            to="/"
            style={{textDecoration: 'none', color: 'black'}}
            className={({isActive}) => isActive ? "active" : ""}
            >
              <li>Home</li>
            </NavLink>

            <NavLink
            to="/administracion"
            style={{textDecoration: 'none', color: 'black'}}
            className={({isActive}) => isActive ? "active" : ""}
            >
             <li>Administracion</li> 
            </NavLink>

          </ul>
        {
          user != null
          ? <Logout name={user.name}/>
          : <section className='nav-btn'>
              <a href='/login' className='btn btn-login'>Iniciar Sesion</a>
              <a href='/register' className='btn btn-singup'>Registrarse</a>
            </section>
        }
      </section>
    </nav>

  )
}
