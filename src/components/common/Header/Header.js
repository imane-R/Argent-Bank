import logo from './argentBankLogo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


/**
 * create the header of all pages
 * @return {JSX}  
 */
function Header() {
    return <header>
        <div className='main-nav'>
            <div className='Logo'>
                <Link to="/">
                    <img className='Logo' src={logo} alt='logo' />
                </Link>
            </div>
            <div className='SingIn'>
                <FontAwesomeIcon icon="user-circle" />
                <Link to="/SingIn">
                    Sign In
                </Link>
            </div>
        </div>

    </header>

}
export default Header;