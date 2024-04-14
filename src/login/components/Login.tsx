
import '../css/style.css'
import logo from '../../assets/logo/logo.png';
import { Fields } from '../../register/components/Fields';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className='container_login'>
        <div className='content_card'>
            <div className='card'>
                <div className='logo_content'>
                    <div>
                        <img src={logo} alt="Logo" className='logo'/>
                    </div>
                    <div>
                        <h2>THRIVE</h2>
                    </div>
                </div>
                <div className='login_text'>
                    <h2>INICIAR SESIÓN</h2>
                </div>
                <div>
                    <Fields nameField='Correo Electrónico'  name='correo_electronico'/>
                    <Fields nameField='Contraseña'  name='contraseña'/>
                </div>
                <div className='sign_up'>
                    <Link to="/register" className='sign'>Crear Registro</Link>
                </div>
                <div className='button_login'>
                    <button type='button'>INGRESAR</button>
                </div>
            </div>
        </div>
    </div>
  )
}
