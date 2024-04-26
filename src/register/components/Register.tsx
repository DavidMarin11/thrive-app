
import '../css/style.css';
import logo from '../../assets/logo/logo.png';
import { FormRegister } from './FormRegister';


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
                    <FormRegister />
                </div>
            </div>
        </div>
    </div>
  )
}
