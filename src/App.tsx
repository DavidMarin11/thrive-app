import './App.css';
import { Login } from './login/components/Login';
import { Register } from './register/components/Register';
import { RouterLogin } from './routes/RouterLogin';

const App = () => {
  return (
    <div>
      <RouterLogin />
      {/* <Register /> */}
    </div>
  );
}

export default App;