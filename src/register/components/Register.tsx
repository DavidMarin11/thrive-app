
import '../css/style.css';
import logo from '../../assets/logo/logo.png';
import { useState } from 'react';

export const Register = () => {

    const [passwordVa, setPasswordVa] = useState<String>('');

    const authRegister = (e: any) => {
        e.preventDefault();
      
        let data = e.target;
      
        const registerUser = {
          name: data.name.value,
          email: data.email.value,
          rol: data.rol.value,
          password: data.password.value,
          confirmedPassword: data.confirmedPassword.value
        }
        console.log(registerUser);
        let password = data.password.value;
        let confirmedPassword = data.confirmedPassword.value;
    }

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
                    <form onSubmit={authRegister}>
                        <div className='fields'>
                            <label htmlFor="">Nombre</label>
                            <input  type="text" name="name" required/>
                        </div>
                        <div className='fields'>
                            <label htmlFor="">Correo Electrónico</label>
                            <input  type="text" name="email" required/>
                        </div>
                        <div className='fields'>
                            <label htmlFor="">Rol</label>
                            <select name="rol" id="rol_select">
                                <option value="">Elegir opcion</option>
                                <option value="1">Paciente</option>
                                <option value="2">Médico</option>
                            </select>
                        </div>
                        <div className='fields'>
                            <label htmlFor="">Contraseña</label>
                            <input  type="password" name="password" required/>
                        </div>
                        <div className='fields'>
                            <label htmlFor="">Confirmar Contraseña</label>
                            <input  type="password" name="confirmedPassword" required/>
                        </div>
                        <div className='button_register'>
                            <button type='submit' >REGISTRAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
