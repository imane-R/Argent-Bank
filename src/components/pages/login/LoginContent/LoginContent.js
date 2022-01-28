import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LoginContent.css'
import Button from '../../../common/Button/Button';
import React, { useState } from 'react'
import { Navigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { loginRequest } from '../../../../redux/actions';



export default function LoginContent() {
  const user = useSelector((state) => state.user); //get user state
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    event.target.id === 'username' ? setEmail(event.target.value) : setPassword(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(loginRequest(email, password))}

    if (user.logged) { return <Navigate to='/profile' /> }

    return <div className='LoginContent'>
      <FontAwesomeIcon icon="user-circle" />
      <h2>Sign In</h2>
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label >
          <input type="text" id="username" autoComplete="user name" value={email} onChange={handleInputChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password" >Password</label>
          <input type="password" id="password" autoComplete="current-password" value={password} onChange={handleInputChange}/>
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me" >Remember me</label>
        </div>
        <Button name='Sing in' fontZise={1.1} width={239}/>
      </form>
    </div>
  }
