import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SingInContent.css'
import Button from '../../../common/Button/Button';
import { Link } from 'react-router-dom';

function SingInContent() {
  return <div className='SingInContent'>
    <FontAwesomeIcon icon="user-circle" />
    <h2>Sign In</h2>
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label >
        <input type="text" id="username" autoComplete="user name" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password" >Password</label
        ><input type="password" id="password" autoComplete="current-password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me" >Remember me</label>
      </div>
      <Link to="/user">
        <Button name='Sing in' />
      </Link>
    </form>
  </div>
}

export default SingInContent;