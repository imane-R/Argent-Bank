import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LoginContent.css'
import Button from '../../../common/Button/Button';

function LoginContent() {
  return <div className='LoginContent'>
    <FontAwesomeIcon icon="user-circle" />
    <h2>Sign In</h2>
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label >
        <input type="text" id="username" autoComplete="user name" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password" >Password</label>
        <input type="password" id="password" autoComplete="current-password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me" >Remember me</label>
      </div>
      <Button name='Sing in' fontZise={1.1} width={239} />
    </form>
  </div>
}

export default LoginContent;