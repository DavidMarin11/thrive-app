import './styles.css'
export function Navbar () {
  return (
    <nav className='navbar'>
      <h1>THRIVE</h1>

        <section className="nav-items">
          <ul>
            <li>Home</li>
            <li>Administracion</li>
            <li>Servicios</li>
          </ul>
        <section className='nav-btn'>
          <a href='/login' className='btn btn-login'>Iniciar Sesion</a>
          <a href='/register' className='btn btn-singup'>Registrarse</a>
        </section>
      </section>
    </nav>

  )
}
