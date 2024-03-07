import React, { useContext, useRef } from 'react'
import './Login.css';
import { loginCall } from '../../ActionCalls';
import { LoginContext } from '../../state/LoginContext'; 

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch} = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );

  };

  return (
    <div className="login_body">
     <div>
        <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='ID' className='userId' ref={email} />
        <input type="password" placeholder='PASSWORD' className='password' ref={password}/>
        <input type='submit' value="LOGIN" className='login_btn' />
      </form>
      </div>
    </div>
  )
}
