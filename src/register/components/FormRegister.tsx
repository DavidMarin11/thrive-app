
import { useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export const FormRegister = () => {

  const { handleSubmit , register, watch, formState: { errors }} = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    let arrayUser = [];
    let users:any = localStorage.getItem("users");
    let bandera = true;

    if (users != null && users != '') {
        arrayUser = JSON.parse(users);
        for (let i = 0; i < arrayUser.length; i++) {
            if (data.email === arrayUser[i]['email']) {
                bandera = false;
                break;
            }
        }
        arrayUser.push(data);
    } else {
        arrayUser.push(data);
    }

    if (bandera) {
        localStorage.setItem('users', JSON.stringify(arrayUser));
        Swal.fire({
            title: 'Guardado',
            text: 'Registro creado correctamente',
            icon: 'success',
            showConfirmButton: false
        });
        navigate('/login');
    } else {
        Swal.fire({
            title: 'El correo ya se encuentra registrado.',
            text: data.email,
            icon: 'warning',
            confirmButtonColor: '#8AA5BD'
        });
    }
  }) 

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='fields'>
            <label htmlFor="">Nombre</label>
            <input 
                type="text"
                {...register( "name", {
                    required: {
                        value: true,
                        message: "Nombre es requerido"
                    },
                    minLength: {
                        value: 3,
                        message: "Debe de tener al menos 3 caracteres."
                    }
                })}
            />
            {
                errors.name && <span className='span_errors'>{(errors.name?.message?.toString())}</span>
            }
        </div>
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
            <label htmlFor="">Rol</label>
            <select
                id="rol_select"
                {...register("rol", {
                    required: "El rol es requerido"
                })}
            >
                <option value="">Elegir opcion</option>
                <option value="1">Paciente</option>
                <option value="2">Médico</option>
            </select>
            {
                errors.rol && <span className='span_errors'>{(errors.rol?.message?.toString())}</span>
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
        <div className='fields'>
            <label htmlFor="">Confirmar Contraseña</label>
            <input 
                type="password"
                {...register( "confirmedPassword", {
                    required: {
                        value: true,
                        message: "La confirmación es requerida"
                    },
                    validate: value => value === watch('password') || "Las contraseñas no coinciden."
                })}
            />
            {
                errors.confirmedPassword && <span className='span_errors'>{(errors.confirmedPassword?.message?.toString())}</span>
            }
        </div>
        <div className='button_register'>
            <button type='submit' >REGISTRAR</button>
        </div>
    </form>
    </div>
  )
}
