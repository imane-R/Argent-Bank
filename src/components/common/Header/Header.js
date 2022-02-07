import React from 'react'
import logo from './argentBankLogo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../redux/actions';

    

/**
 * create the header of all pages
 * @return {JSX}  
 */
function Header() {
    const user = useSelector((state) => state.user); //get user state
    const dispatch = useDispatch();

    const disconnect = (event) => {
        event.preventDefault();
        dispatch(logOut())
    }
    return <header>
        <div className='main-nav'>
            <div className='Logo'>
                <Link to="/">
                    <img className='Logo' src={logo} alt='logo' />
                </Link>
            </div>
            {!user.logged ?(
            <div className='LoginHeader'>
                <Link to='/login'>
                    <FontAwesomeIcon icon="user-circle" />
                    Sign In
                </Link>
            </div>):(
                <div>
                <Link to="/profile">
                    <span className='main-nav-item'>
                    <FontAwesomeIcon icon="user-circle" />
                        {user.firstName}
                    </span>
                </Link>
                    <Link className='main-nav-item' onClick={disconnect} to='/' >
                    <FontAwesomeIcon icon="sign-out-alt" />
                        Sign Out
                    </Link>
                </div>)
            }
        </div>

    </header>

}
export default Header;