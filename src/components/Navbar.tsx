import { NavLink } from 'react-router-dom'

import './styles.css'

export function Navbar () {
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
            to="/register"
            style={{textDecoration: 'none', color: 'black'}}
            className={({isActive}) => isActive ? "active" : ""}
            >
             <li>Administracion</li> 
            </NavLink>

            <NavLink
            to="/services" end
            style={{textDecoration: 'none', color: 'black'}}
            className={({isActive}) => isActive ? "active" : ""}
            >
              <li>Servicios</li>
            </NavLink>
          </ul>
        <section className='nav-btn'>
          <a href='/login' className='btn btn-login'>Iniciar Sesion</a>
          <a href='/register' className='btn btn-singup'>Registrarse</a>
        </section>
      </section>
    </nav>

  )
}
