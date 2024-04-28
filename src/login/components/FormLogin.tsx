import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export const FormLogin = () => {
    const { handleSubmit , register, formState: { errors }} = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {

        let users = JSON.parse(localStorage.getItem("users"));

        if (users != null) {
            let email = users.find(user => user.email === data.email);
            
            if (email != null && email.email == data.email && email.password == data.password) {
                
                let dataUser = {
                    'name' : email.name,
                }

                let loginUser = JSON.parse(localStorage.getItem("login_user"));
                 
                if (loginUser == null) {
                    localStorage.setItem('login_user', JSON.stringify(dataUser));
                    navigate('/home');
                } else {
                    localStorage.removeItem('login_user');
                    localStorage.setItem('login_user', JSON.stringify(dataUser));
                    navigate('/home');
                }
            } else {
                Swal.fire({
                    title: `El usuario con correo electrónico ${data.email} ingresado no existe.`,
                    icon: 'warning',
                    confirmButtonColor: '#8AA5BD'
                  });
            }
        }
      }) 
  return (
    <div>
        <form onSubmit={onSubmit}>
            <div className='fields'>
                <label htmlFor="">Correo Electrónico</label>
                <input  
                    type="text"
                    {...register( "email", {
                        required: {
                            value: true,
                            message: "El email es requerido"
                        },
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Correo no valido"
                        }
                    })}
                />
                {
                    errors.email && <span className='span_errors'>{(errors.email?.message?.toString())}</span>
                }
            </div>
            <div className='fields'>
                <label htmlFor="">Contraseña</label>
                <input 
                    type="password"
                    {...register( "password", {
                        required: {
                            value: true,
                            message: "La contraseña es requerida"
                        },
                        minLength: {
                            value: 8,
                            message: "Debe de tener al menos 8 caracteres."
                        }
                    })}
                />
                {
                    errors.password && <span className='span_errors'>{(errors.password?.message?.toString())}</span>
                }
            </div>
            <div className='button_login'>
                <button type='submit'>INGRESAR</button>
            </div>
    </form>
    </div>
  )
}
