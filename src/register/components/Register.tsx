
import '../css/style.css';
import logo from '../../assets/logo/logo.png';
import { Fields } from './Fields';

export const Register = () => {
  return (
    <div className='container_register'>
        <div className='content_card'>
            <div className='card_one'>
                <div >
                    <img src={logo} alt="Logo" className='logo'/>
                </div>
                <div>
                    <h1>THRIVE</h1>
                </div>
            </div>
            <div className='card_two'>
                <div className='register_text'>
                    <h2>REGISTRASE</h2>
                </div>
                <div className='content_form'>
                    <form action="">
                        <Fields nameField="Nombre" name='name'/>
                        <Fields nameField="Correo Electrónico" name='email'/>
                        <div className='fields'>
                            <label htmlFor="">Rol</label>
                            <select name="rol" id="rol_select">
                                <option value="">Elegir opcion</option>
                                <option value="1">Paciente</option>
                                <option value="2">Médico</option>
                            </select>
                        </div>
                        <Fields nameField="Contraseña" name='password'/>
                        <Fields nameField="Confirmar Contraseña" name="password"/>

                        <div className='button_register'>
                            <button type='submit'>REGISTRAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
