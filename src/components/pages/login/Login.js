import './Login.css';
import LoginContent from './LoginContent/LoginContent';
import Spacer from '../../common/Spacer/Spacer';

function Login() {
    return <div className='Login'>
        <Spacer height={50}/>
        <LoginContent/>
    </div>
}

export default Login;